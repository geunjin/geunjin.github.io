import React from 'react';
import Layout from '../../components/Layout'
import Seo from "../../components/Seo";
import { graphql } from 'gatsby'

export const Head = () => <Seo title={'Blog Posts'}/>
export default function BlogPage({data}) {
  return (
    <Layout pageTitle={'Blog'}>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`