import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Post = (props) => {
  console.log(props)
  const { data, children } = props;
  const {
    mdx: {
      frontmatter: {
        title,
        hero_image,
        hero_image_alt
      },
    },
  } = data;
  const image = getImage(hero_image)
  return (
    <Layout pageTitle={title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        <GatsbyImage
          image={image}
          alt={hero_image_alt}
        />
      )}
      {children}
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Post;
