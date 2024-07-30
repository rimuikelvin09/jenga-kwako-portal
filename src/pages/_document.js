import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />

        {/**Facebook plugin script */}
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0"
          nonce="IuDCVoPJ"
        ></script>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
