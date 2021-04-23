import Head from "next/head";

import "../styles/index.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="author" content="Компания РОСИМПОРТ" />
        <meta property="og:type" content="profile" />
        <meta name="yandex" content="all" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script src="https://www.google.com/recaptcha/api.js"></script>
        <link
          href="preloader/css/preloader100.css"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
