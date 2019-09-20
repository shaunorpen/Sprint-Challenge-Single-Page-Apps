import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SiteHeader = styled.header`
  h1 {
    color: #472523;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      margin: 20px 10px;
      padding: 10px;
      width: 100px;
      text-decoration: none;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
      color: #472523;
    }

    a:hover {
      background: lightgreen;
    }
  }
`;

export default function Header() {
  return (
    <SiteHeader>
      <h1>Rick &amp; Morty Fan Page</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/search'>Search</Link>
      </nav>
    </SiteHeader>
  );
}
