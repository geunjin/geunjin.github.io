import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

export default function Layout(props) {
  const { children } = props;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const navList = [
    { id: "home", label: "Home", to: "/" },
    { id: "about", label: "About", to: "/about" },
    { id: "blog", label: "Blog", to: "/blog" },
  ];

  return (
    <div className={"layout-container"}>
      <div className={"nav-wrap"}>
        <header>{data.site.siteMetadata.title}</header>
        <nav>
          {navList.map((nav) => (
            <Link to={nav.to}>{nav.label}</Link>
          ))}
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
}
