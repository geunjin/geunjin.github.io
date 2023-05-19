import React from 'react';

import Layout from '../../components/layout/Layout'

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

export const Head = () => <title>About Me</title>
