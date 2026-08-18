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
