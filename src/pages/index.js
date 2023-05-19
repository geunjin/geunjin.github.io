import * as React from 'react';
import Layout from '../components/layout/Layout'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'


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

export const Head = () => <title>GeunJin Blog</title>;
