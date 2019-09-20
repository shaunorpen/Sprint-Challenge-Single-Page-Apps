import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import SearchForm from './components/SearchForm'

export default function App() {
  const [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const [characters, setCharacters] = useState([]);
  const [back, setBack] = useState();
  const [forward, setForward] = useState();

  useEffect(() => {
    axios.get(apiUrl)
      .then(res => {
        setCharacters(res.data.results);
        setBack(res.data.info.prev);
        setForward(res.data.info.next);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [apiUrl]);

  return (
    <main>
      <Header />
      <Route path='/' exact render={props => <WelcomePage/>}/>
      <Route path='/characters' render={props => <CharacterList 
        characters={characters}
        back={back}
        forward={forward}
        setApiUrl={setApiUrl}
      />}/>
    </main>
  );
}
