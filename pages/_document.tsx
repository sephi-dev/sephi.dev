import React from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Header from "@components/header";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="blog for dev juniors and students"
          />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
