import React, { useMemo, useState } from "react";
import Head from "next/head";
import {
  ArrowRightIcon,
  CaretDownIcon,
  CaretRightIcon,
  FlaskIcon,
  ListBulletsIcon,
  MagnifyingGlassIcon,
  PackageIcon,
  PillIcon,
  ShieldCheckIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Navigate, Routes } from "../../navigation/NavigationLib";
import {
  SupplementCategories,
  getDosageFormVariant,
  getSupplementCategory,
} from "../../utils/SupplementCategories";

const normalise = (value) => (value || "").toString().toLowerCase();

const SupplementDetail = ({ categoryKey, data = [] }) => {
  const category = getSupplementCategory(categoryKey);
  const [query, setQuery] = useState("");
  const [activeForm, setActiveForm] = useState("all");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const dosageForms = useMemo(() => {
    const forms = data.map((item) => item.dosageForm).filter(Boolean);
    return Array.from(new Set(forms));
  }, [data]);

  const filteredData = useMemo(() => {
    const search = normalise(query).trim();
    return data.filter((item) => {
      const matchesForm = activeForm === "all" || item.dosageForm === activeForm;
      if (!matchesForm) return false;
      if (!search) return true;
      return [item.classification, item.ingredient, item.dosageForm].some(
        (field) => normalise(field).includes(search)
      );
    });
  }, [data, query, activeForm]);

  const hasFilters = query.trim() !== "" || activeForm !== "all";

  const clearFilters = () => {
    setQuery("");
    setActiveForm("all");
  };

  const goTo = (route) => {
    setIsNavOpen(false);
    Navigate(route);
  };

  const categoryNav = (
    <ul className="sd-nav-list">
      {SupplementCategories.map((item) => {
        const isActive = item.key === categoryKey;
        return (
          <li key={item.key}>
            <button
              type="button"
              className={`sd-nav-link${isActive ? " is-active" : ""}`}
              onClick={() => goTo(item.route)}
              aria-current={isActive ? "page" : undefined}
            >
              <span>{item.label}</span>
              <ArrowRightIcon size={16} weight="bold" />
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="supplement-detail">
      <Head>
        <title>{`${category ? category.label : "Supplements"
          } | Sanitas Healthcare`}</title>
        <meta
          name="description"
          content={category ? category.description : ""}
        />
      </Head>

      <section className="sd-hero page-hero">
        <div className="container">
          <div className="sd-hero-inner page-hero-inner">

            {category && category.tagline && (
              <span className="section-eyebrow">{category.tagline}</span>
            )}
            <h1>{category && category.label}</h1>
            {category && category.description && <p>{category.description}</p>}

            <div className="sd-hero-meta">
              <span className="sd-chip">
                <FlaskIcon size={18} weight="fill" />
                {data.length} formulation{data.length === 1 ? "" : "s"}
              </span>
              <span className="sd-chip">
                <PillIcon size={18} weight="fill" />
                {dosageForms.length} dosage form
                {dosageForms.length === 1 ? "" : "s"}
              </span>
              <span className="sd-chip">
                <ShieldCheckIcon size={18} weight="fill" />
                GMP certified manufacturing
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="sd-body">
        <div className="container">
          <div className="sd-layout">
            <aside className="sd-sidebar">
              <div className="sd-sidebar-card">
                <h2>Our range</h2>
                <p className="sd-sidebar-sub">
                  Explore the complete Sanitas portfolio
                </p>
                {categoryNav}
              </div>
            </aside>

            <main className="sd-content">
              <div className="sd-mobile-nav">
                <button
                  type="button"
                  className="sd-mobile-nav-toggle"
                  onClick={() => setIsNavOpen((open) => !open)}
                  aria-expanded={isNavOpen}
                >
                  <span className="sd-mobile-nav-label">
                    <ListBulletsIcon size={18} weight="bold" />
                    {category && category.label}
                  </span>
                  <CaretDownIcon
                    size={16}
                    weight="bold"
                    className={isNavOpen ? "is-open" : ""}
                  />
                </button>
                {isNavOpen && (
                  <div className="sd-mobile-nav-panel">{categoryNav}</div>
                )}
              </div>

              <div className="sd-content-head">
                <div className="sd-content-title">
                  <span className="section-eyebrow">Formulations</span>
                  <h2>Product range</h2>
                  <p>
                    Showing {filteredData.length} of {data.length} formulations
                  </p>
                </div>

                <div className="sd-search">
                  <MagnifyingGlassIcon size={18} weight="bold" />
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search ingredient or classification"
                    aria-label="Search formulations"
                  />
                  {query && (
                    <button
                      type="button"
                      className="sd-search-clear"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                    >
                      <XIcon size={14} weight="bold" />
                    </button>
                  )}
                </div>
              </div>

              {dosageForms.length > 1 && (
                <div
                  className="sd-filters"
                  role="group"
                  aria-label="Filter by dosage form"
                >
                  <button
                    type="button"
                    className={`sd-filter${activeForm === "all" ? " is-active" : ""
                      }`}
                    onClick={() => setActiveForm("all")}
                  >
                    All forms
                  </button>
                  {dosageForms.map((form) => (
                    <button
                      key={form}
                      type="button"
                      className={`sd-filter${activeForm === form ? " is-active" : ""
                        }`}
                      onClick={() => setActiveForm(form)}
                    >
                      {form}
                    </button>
                  ))}
                </div>
              )}

              {filteredData.length === 0 ? (
                <div className="sd-empty">
                  <FlaskIcon size={40} weight="duotone" />
                  <h3>No formulations match your search</h3>
                  <p>Try a different ingredient, or reset the filters.</p>
                  <button
                    type="button"
                    className="prm-btn"
                    onClick={clearFilters}
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="sd-table-card">
                    <table className="sd-table">
                      <thead>
                        <tr>
                          <th scope="col" className="sd-col-no">
                            #
                          </th>
                          <th scope="col">Active Classification</th>
                          <th scope="col">Active Ingredient</th>
                          <th scope="col" className="sd-col-form">
                            Dosage Form
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((item, index) => (
                          <tr key={`row-${item.srNo}-${index}`}>
                            <td className="sd-col-no">
                              {String(
                                item.srNo == null ? index + 1 : item.srNo
                              ).padStart(2, "0")}
                            </td>
                            <td className="sd-cell-classification">
                              {item.classification}
                            </td>
                            <td>{item.ingredient}</td>
                            <td className="sd-col-form">
                              <span
                                className={`sd-pill sd-pill-${getDosageFormVariant(
                                  item.dosageForm
                                )}`}
                              >
                                {item.dosageForm}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="sd-cards">
                    {filteredData.map((item, index) => (
                      <article
                        className="sd-card"
                        key={`card-${item.srNo}-${index}`}
                      >
                        <header className="sd-card-head">
                          <span className="sd-card-no">
                            {String(
                              item.srNo == null ? index + 1 : item.srNo
                            ).padStart(2, "0")}
                          </span>
                          <span
                            className={`sd-pill sd-pill-${getDosageFormVariant(
                              item.dosageForm
                            )}`}
                          >
                            {item.dosageForm}
                          </span>
                        </header>
                        <h3>{item.classification}</h3>
                        <div className="sd-card-row">
                          <span className="sd-card-label">
                            Active ingredient
                          </span>
                          <p>{item.ingredient}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}

              {hasFilters && filteredData.length > 0 && (
                <button type="button" className="sd-reset" onClick={clearFilters}>
                  Reset filters
                </button>
              )}

              <div className="sd-assurance">
                <div className="sd-assurance-item">
                  <span className="sd-assurance-icon">
                    <FlaskIcon size={22} weight="fill" />
                  </span>
                  <h4>In-house formulation</h4>
                  <p>
                    Compositions developed, trialled and stability tested by our
                    own R&amp;D team.
                  </p>
                </div>
                <div className="sd-assurance-item">
                  <span className="sd-assurance-icon">
                    <ShieldCheckIcon size={22} weight="fill" />
                  </span>
                  <h4>Quality assured</h4>
                  <p>
                    Manufactured at GMP certified facilities with batch-wise
                    quality checks.
                  </p>
                </div>
                <div className="sd-assurance-item">
                  <span className="sd-assurance-icon">
                    <PackageIcon size={22} weight="fill" />
                  </span>
                  <h4>Your pack, your brand</h4>
                  <p>
                    Tablets, capsules, sachets, syrups and drops packed to your
                    branding.
                  </p>
                </div>
              </div>

              <div className="sd-callout">
                <div className="sd-callout-text">
                  <h3>Need a custom formulation?</h3>
                  <p>
                    Share your composition and we will take it from development
                    to finished pack.
                  </p>
                </div>
                <button
                  type="button"
                  className="prm-btn"
                  onClick={() => Navigate(Routes.contact)}
                >
                  Talk to our team
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplementDetail;
