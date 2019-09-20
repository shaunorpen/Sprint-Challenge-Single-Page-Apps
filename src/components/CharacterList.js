import React from "react";
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList({characters, back, forward, setApiUrl}) {

  const CharacterList = styled.section`
    .search {
      display: flex;
      justify-content: center;

      input {
        font-size: 1rem;
        width: 50%;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
        margin: 10px;
        margin-bottom: 30px;
        padding: 10px;
        color: #472523;
      }
    }
    
    .character-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

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
      <div className='search'>
        <SearchForm />
      </div>
      <div className='character-cards'>
        {
          characters.map(character => {
            return <CharacterCard props={character} />
          })
        }
      </div>
      <div className='nav'>
        <button onClick={() => setApiUrl(back)} >Back</button>
        <button onClick={() => setApiUrl(forward)} >Next</button>
      </div>
    </CharacterList>
  );
}
