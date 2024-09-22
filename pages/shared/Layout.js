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
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
