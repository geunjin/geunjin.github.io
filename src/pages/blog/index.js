import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, graphql } from 'gatsby'

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle={"Blog"}>
      {data.allMdx.nodes.map((node) => {
        const {
          id,
          excerpt,
          frontmatter: { title, date, slug },
        } = node;
        return (
          <article key={id}>
            <h2>
              <Link to={`/blog/${slug}`}>
                {title}
              </Link>
            </h2>
            <p>Posted: {date}</p>
            <p>{excerpt}</p>
          </article>
        );
      })}
    </Layout>
  );
}

export const Head = () => <Seo title={"Blog Posts"} />;
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;
