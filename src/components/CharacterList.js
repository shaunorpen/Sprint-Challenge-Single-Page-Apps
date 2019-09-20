import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

import characterApiResponse from '../data/characterApiRepsonse';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const CharacterList = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .nav {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      padding: 20px;

      button {
        display: block;
        padding: 10px 30px;
        width: 100px;
        margin: 0px 10px;
        border-radius: 10px;
        font-size: 1rem;
        border: none;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
      }
      
      button:hover {
      background: lightgreen;
    }
    }
  `;

  return (
    <CharacterList>
      {
        characterApiResponse.results.map(character => {
          return <CharacterCard props={character} />
        })
      }
      <div className='nav'>
        <button>Back</button>
        <button>Next</button>
      </div>
    </CharacterList>
  );
}
