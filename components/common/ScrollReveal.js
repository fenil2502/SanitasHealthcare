import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Reveals page sections as they scroll into view.
 *
 * Mounted once from Layout. On every route change it re-scans the page and
 * tags the direct children of each known page wrapper - those children are the
 * sections. The first child of each wrapper is skipped: that is the hero, and
 * heroes already animate on load.
 */

/* wrappers whose direct children are the page sections */
const PAGE_ROOTS = [
  ".homepage .home-inner",
  ".aboutpage",
  ".contactpage",
  ".portfoliopage",
  ".supplement-detail",
];

const REVEAL_ATTR = "data-reveal";
const REVEALED = "is-revealed";
const INIT_CLASS = "reveal-init";

/** Collect the sections of whichever page is currently mounted. */
export const collectSections = () => {
  const sections = [];
  PAGE_ROOTS.forEach((selector) => {
    const root = document.querySelector(selector);
    if (!root) {
      return;
    }
    Array.from(root.children).forEach((el, index) => {
      /* index 0 is the hero - it has its own entrance animation */
      if (index === 0 || el.nodeType !== 1) {
        return;
      }
      sections.push(el);
    });
  });
  return sections;
};

/**
 * Tag every section and start watching the ones below the fold.
 * Returns the observer so the caller can disconnect it, or null.
 */
export const revealSections = () => {
  const prefersReduced =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const sections = collectSections();
  if (!sections.length) {
    return null;
  }

  const canObserve =
    !prefersReduced && typeof window.IntersectionObserver === "function";

  let observer = null;
  if (canObserve) {
    observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(REVEALED);
            observer.unobserve(entry.target);
          }
        });
      },
      /* the reveal is slow, so start it as soon as the section edge shows -
         waiting any longer leaves it still settling once it is in full view */
      { rootMargin: "0px 0px -3% 0px", threshold: 0.02 }
    );
  }

  const foldline = window.innerHeight * 0.92;
  const html = document.documentElement;

  /* Tagging an element applies both the hidden state and the transition at
     once, which makes an already-painted section visibly fade out. Kill
     transitions for the tagging pass, flush, then switch them back on. */
  html.classList.add(INIT_CLASS);

  sections.forEach((el) => {
    const alreadyOnScreen = el.getBoundingClientRect().top < foldline;
    el.setAttribute(REVEAL_ATTR, "");

    if (!canObserve || alreadyOnScreen) {
      el.classList.add(REVEALED);
      return;
    }

    el.classList.remove(REVEALED);
    observer.observe(el);
  });

  /* force a style flush so the hidden state lands without a transition */
  void html.offsetHeight;
  html.classList.remove(INIT_CLASS);

  return observer;
};

const ScrollReveal = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    let observer = null;
    let watcher = null;

    const scan = () => {
      if (!collectSections().length) {
        return false;
      }
      observer = revealSections();
      return true;
    };

    /* On a first load the page body lands after this effect runs: PersistGate
       renders nothing until the redux store has rehydrated. Scan now, and if
       the sections are not there yet, watch for them. */
    if (!scan() && typeof window.MutationObserver === "function") {
      watcher = new window.MutationObserver(() => {
        if (scan()) {
          watcher.disconnect();
          watcher = null;
        }
      });
      watcher.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      if (watcher) {
        watcher.disconnect();
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [router.asPath]);

  return null;
};

export default ScrollReveal;
