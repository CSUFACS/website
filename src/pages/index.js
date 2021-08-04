import * as React from "react";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSUFACS</title>
      </Helmet>
      <h1>Hello there</h1>
    </>
  );
};

export default IndexPage;
