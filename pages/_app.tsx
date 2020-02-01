/* eslint-disable-file */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const spring = {
  type: "tween",
  damping: 20,
  stiffness: 100,
  when: "afterChildren"
};
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
    const { Component, pageProps, store, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <>
              <motion.div
                transition={spring}
                key={router.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id="page-transition-container"
              >
                <Component {...pageProps} key={router.route} />
              </motion.div>
              <FontFace />
              <NormalizeCSS />
            </>
          </ThemeProvider>
        </Provider>
      </AnimatePresence>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
