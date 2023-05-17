import * as React from 'react';
import { Link } from 'gatsby';

import '../../styles/layout.css'

export default function Layout(props) {
  const {pageTitle,children} = props;
  return (
    <div className={'container'}>
      <nav>
        <ul className={'nav-links'}>
          <li className={'nav-link-item'}>
            <Link to="/" className={'nav-link-text'}>
              Home
            </Link>
          </li>
          <li className={'nav-link-item'}>
            <Link to="/about" className={'nav-link-text'}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={'heading'}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}