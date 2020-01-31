/* eslint-disable-file */
import React from "react";
import { Store } from "redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import App, { AppContext } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "@glossy/theme.main";
import NormalizeCSS from "@glossy/normalize";
import configureStore from "../store";
import FontFace from "@glossy/fonts";

interface Props {
  store: Store;
}
class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    // will wait for the store.
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <Component {...pageProps} />
            <FontFace />
            <NormalizeCSS />
          </>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
