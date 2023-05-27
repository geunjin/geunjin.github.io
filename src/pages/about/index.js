import React from 'react';
import Layout from '../../components/Layout'
import Seo from "../../components/Seo";

export default function AboutPage() {
  return (
    <Layout pageTitle={'About'}>
      <div>
        <span>About Me</span>
        <p>temp</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title={'About ME'}/>
