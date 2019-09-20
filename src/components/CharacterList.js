import React, { useEffect, useState } from "react";

import characterApiResponse from '../data/characterApiRepsonse';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {
        characterApiResponse.results.map(character => {
          return (
            <div key={character.id} >
              <h3>{character.name}</h3>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Status: {character.status === 'unknown' ? 'Unknown' : character.status}</p>
              <p>Type: {character.type ? character.type : 'Not defined'}</p>
            </div>
          )
        })
      }
    </section>
  );
}
