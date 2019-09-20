import React, { useEffect, useState } from "react";
import styled from 'styled-components';

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

    div {
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
      padding: 1rem;
      margin: 0.4rem 0.4rem;
      flex-basis: 10rem;
      flex-shrink: 1;
      flex-grow: 1;
      color: #472523;

      h3 {
        font-size: 1rem;
        margin-top: 0;
      }

      p {
        font-size: 0.8rem;
        margin-bottom: 0;
      }
    }
  `;

  return (
    <CharacterList>
      {
        characterApiResponse.results.map(character => {
          const {id, name, species, gender, status, type} = character;
          return (
            <div key={id} >
              <h3>{name}</h3>
              <p>Species: {species}</p>
              <p>Gender: {gender}</p>
              <p>Status: {status === 'unknown' ? 'Unknown' : status}</p>
              <p>Type: {type ? type : 'Not defined'}</p>
            </div>
          )
        })
      }
    </CharacterList>
  );
}
