import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@glossy/theme.main";
import NormalizeCSS from "@glossy/normalize";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Component {...pageProps} />
          <NormalizeCSS />
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
