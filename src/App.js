import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      <Route path='/' exact render={props => <WelcomePage/>}/>
      <Route path='/characters' exact render={props => <CharacterList />}/>
    </main>
  );
}
