import * as React from 'react';

import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <div>
      <h1>GeunJin Blog</h1>
      <div>공사중...</div>
      <div>Tutorials 정독중...</div>
      <Link to={'/about'}>About</Link>
    </div>
  );
}

export const Head = () => <title>GeunJin Blog</title>;
