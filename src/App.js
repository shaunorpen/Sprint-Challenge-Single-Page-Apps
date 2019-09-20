import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import SearchForm from './components/SearchForm'

export default function App() {
  return (
    <main>
      <Header />
      <Route path='/' exact render={props => <WelcomePage/>}/>
      <Route path='/characters' render={props => <CharacterList />}/>
      <Route path='/search' render={props => <SearchForm />}/>
    </main>
  );
}
