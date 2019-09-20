import React from "react";
import styled from 'styled-components';

const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #472523;
  }

  div {
    width: 500px;
    margin: 40px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);

    img {
      width: 100%;
    }
  }
`;

export default function WelcomePage() {
  return (
    <Welcome>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </div>
      </header>
    </Welcome>
  );
}
