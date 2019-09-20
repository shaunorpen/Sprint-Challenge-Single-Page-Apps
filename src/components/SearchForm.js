import React from "react";
import styled from 'styled-components';

const Search = styled.div`
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
`;

export default function SearchForm({  searchTerm , setSearchTerm, setApiUrl }) {
  return (
    <Search className='search'>
      <input type='text' 
            onChange={e => {
              setSearchTerm(e.target.value);
              const searchUrl = 'https://rickandmortyapi.com/api/character/?name=' + searchTerm.toLowerCase();
              setApiUrl(searchUrl);
            }}
            value={searchTerm} />
    </Search>
  );
}
