import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, Routes } from "../../navigation/NavigationLib";
import Link from "next/link";

class Header extends Component {
  render() {
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
                  <div className="btn-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </button>
              </div>
            </div>
            <div className="navbar">
              <div className="navbar-logo">
                <img src="Sanitash_logo.svg" alt="Sanitas" />
              </div>
              <div className="navbar-menu">
                <div className="navbar-links">
                  <FontAwesomeIcon icon={faBarsStaggered} />
                </div>
                <button onClick={() => Navigate(Routes.contact)}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
