import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";
import Link from "next/link";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => {
      const isMenuOpen = !prevState.isMenuOpen;

      // Enable or disable body scrolling based on menu state
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      return { isMenuOpen };
    });
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
    document.body.style.overflow = "auto";
  };

  navigateFromHeader = (page) => {
    if (page === "Home") {
      Navigate(Routes.home);
    } else if (page === "About") {
      Navigate(Routes.about);
    } else if (page === "Portfolio") {
      Navigate(Routes.portfolio);
    }
    this.toggleMenu();
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <div className="header">
        <div className="container">
          <div className="header-inner">
            <div className="header-desktop">
              <div className="header-logo">
                <img src="Sanitash_logo.svg" alt="Sanitas" />
              </div>
              <div className="header-menu">
                <div className="header-links">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/portfolio">Portfolio</Link>
                </div>
                <button onClick={() => Navigate(Routes.contact)}>
                  Contact Us
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="navbar">
              <div className="navbar-logo" onClick={() => Navigate(Routes.home)}>
                <img src="Sanitash_logo.svg" alt="Sanitas" />
              </div>
              <div className="navbar-menu">
                <div className="navbar-links" onClick={this.toggleMenu}>
                  <FontAwesomeIcon
                    icon={isMenuOpen ? faXmark : faBarsStaggered}
                  />
                </div>
                <button onClick={() => Navigate(Routes.contact)}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a onClick={() => this.navigateFromHeader("Home")}>Home</a>
            <a onClick={() => this.navigateFromHeader("About")}>About</a>
            <a onClick={() => this.navigateFromHeader("Portfolio")}>
              Portfolio
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
