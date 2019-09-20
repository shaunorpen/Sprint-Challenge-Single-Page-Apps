import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const rickAndMortyApi = 'https://rickandmortyapi.com/api/character/';
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(rickAndMortyApi)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [characters]);

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
        characters.map(character => {
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
