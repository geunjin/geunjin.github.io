import * as React from 'react';
import Layout from '../components/Layout'
import { Link } from 'gatsby';
import Seo from "../components/Seo";


export default function IndexPage() {
  return (
    <Layout pageTitle={'Index'}>
      <div>
        <h1>GeunJin Blog</h1>
        <div>공사중...</div>
        <div>Tutorials... TEST</div>
        <Link to={'/about'}>About</Link>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo/>
