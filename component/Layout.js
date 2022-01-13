import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Head>
        {" "}
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>

      <Container>
        <Header />
        <div>{props.children}</div>
      </Container>
    </>
  );
};

export default Layout;
