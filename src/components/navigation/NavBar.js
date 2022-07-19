import React from 'react';
import {A} from 'hookrouter';

export default function NavBar () {
  return (
    <div className="navigation-wrapper">
      <div className="nav-link">
        <A href="/">
          Home
        </A>
      </div>

      <div className="nav-link">
        <A href="/books">
          Books
        </A>
      </div>
    </div>
  );
}
