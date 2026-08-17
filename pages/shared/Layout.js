import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, title, searchType }) => {
  let defaultHeader = null;
  defaultHeader = <Header />;

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <title>{title} Sanitas Healthcare</title>
      </Head>
      {defaultHeader}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchType: state.searchType,
  };
};

export default connect(mapStateToProps)(Layout);
