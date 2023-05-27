import React from 'react';
import Layout from '../../components/Layout'
import Seo from "../../components/Seo";
import { graphql } from 'gatsby'

export const Head = () => <Seo title={'Blog Posts'}/>
export default function BlogPage({data}) {
  return (
    <Layout pageTitle={'Blog'}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`