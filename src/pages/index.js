import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSUFACS</title>
      </Helmet>
      {/* <h1>Hello there</h1> */}
        <Navbar></Navbar>
    </>
  );
};

export default IndexPage;
