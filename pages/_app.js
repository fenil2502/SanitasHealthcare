import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { getAuthProps } from "../utils/AuthenticationLibrary";
import 'react-multi-carousel/lib/styles.css';
import Layout from "./shared/Layout";
import "../styles/style.scss";
import "../styles/responsive.scss"
import "../styles/index.css"
import "../styles/App.css"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const authString = getAuthProps();
    let authProps = {};
    if (authString != undefined) {
      authProps = {
        authUser: authString,
      };
    }
    return {
      pageProps: {
        ...authProps,
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  state = {
    history: [], // keep history items in state
  };

  componentDidMount() {
    const { asPath } = this.props.router;
    this.setState((prevState) => ({ history: [...prevState.history, asPath] }));
  }

  componentDidUpdate() {
    const { history } = this.state;
    const { asPath } = this.props.router;
    if (history[history.length - 1] !== asPath) {
      this.setState((prevState) => ({
        history: [...prevState.history, asPath],
      }));
    }
  }

  render() {
    const authString = getAuthProps();
    let authProps = {};
    if (authString != undefined) {
      authProps = authString;
    }

    const { Component, pageProps, store, router } = this.props;
    let finalpageProps = {
      ...authProps,
      ...pageProps,
    };

    return (
      <div className="main-page-bg">
        <Provider store={store}>
          <Layout>
            <PersistGate persistor={store.__PERSISTOR} loading={null}>
              <Component history={this.state.history} {...finalpageProps} />
            </PersistGate>
          </Layout>
        </Provider>
      </div>
    );
  }
}

export default withRedux(initStore)(MyApp);
