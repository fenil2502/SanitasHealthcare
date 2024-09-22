import { connect } from "react-redux";
import React, { Component } from "react";
import Head from "next/head";
import { Navigate, Routes } from "../navigation/NavigationLib";
import * as actions from "./../redux/actions/SearchAction";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Homes from '../pages/home/Home';



class Home extends Component {
  render() {
    return <div className=""><Homes/></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

/**
 *   We call the reducer method to store the value into the store.

 */
const mapDispatchToProps = (dispatch) => {
  
  return {
    onSearch: (textSearchParameter, searchResultParameter, isInit) => {
      dispatch(actions.searchResult(searchResultParameter)).then((res) => {
        if (!isInit) {
          if (searchResultParameter.totalCount === 1) {
            Navigate(Routes.ProductDetail, [
              searchResultParameter.itemList[0].catalogId,
            ]);
          } else {
            Navigate(Routes.SearchResult);
          }
        }
      });
      dispatch(actions.searchParams(textSearchParameter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
