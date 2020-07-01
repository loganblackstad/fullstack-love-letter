import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import axios from "axios";
import Card from './components/Card';
import Dashboard from './components/Dashboard';
// import InitialDeck from "./Components/InitialDeck";
// import ThreePiles from "./Components/ThreePiles";
import Header from "./components/Header";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


export default class App extends Component {
  constructor(props) {
    super(props)

    // const [newDeck, setNewDeck] = useState(null); // Initial Deck containing 16 shuffled cards
    // const [burnCard, setBurnCard] = useState(null); // Initial Deck containing 16 shuffled cards
    // const [cardsArr, setCardsArr] = useState([]); // Array Containing 15 Card codes
    // const [imagesArr, setImagesArr] = useState([]); // Array Containing 15 Card images
    // const [shuffledDeck, setShuffledDeck] = useState(null); // New shuffled deck containing 15 cards
    // const [playerHandOne, setPlayerHandOne] = useState(false); // Player 1 Hand containing 1 or 2 cards
    // const [playerHandTwo, setPlayerHandTwo] = useState(false); // Player 1 Hand containing 1 or 2 cards
    // const [playerHandThree, setPlayerHandThree] = useState(false); // Player 1 Hand containing 1 or 2 cards
    // const [playerHandFour, setPlayerHandFour] = useState(false); // Player 1 Hand containing 1 or 2 cards

    // const corsURL = "https://cors-anywhere.herokuapp.com/";
    // const baseURL = `${corsURL}https://deckofcardsapi.com/api/deck`;

    this.state = {
      players: ['lachlan', 'joe', 'wes', 'liz'],
      name: '',
      initialDiscard: ['card4'],
      cardsInDeck: [],
      cardsPlayed: ['card1', 'card1', 'card2', 'card3']
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Dashboard players={this.state.players} />
            </Route>
            <Route path="/room">
              {/*
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>Back to Dashboard</Link>
              */}
              <Card />
            </Route>
            {/* 
            <Route path="/recipes/new" />
            <Route path="/recipes/:id" /> 
            */}

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
