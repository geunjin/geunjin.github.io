import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Seo from "../components/Seo";

import "../styles/index.less";

export default function IndexPage() {
  return (
    <Layout>
      <div>
        <h1>GeunJin Blog</h1>
        <div>공사중...</div>
        <div>Tutorials... TEST</div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo />;
