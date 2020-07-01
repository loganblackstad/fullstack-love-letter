import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// import axios from "axios";
import Card from './components/Card';
import CardsPlayed from './components/CardsPlayed';
import Dashboard from './components/Dashboard';
import ModalCheatSheet from './components/ModalCheatSheet'
// import InitialDeck from "./Components/InitialDeck";
// import ThreePiles from "./Components/ThreePiles";
import Header from "./components/Header";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const cardList = require('./CardList')


export default class App extends Component {
  constructor(props) {
    super(props)

    // const [newDeck, setNewDeck] = useState(null); // Initial Deck containing 16 shuffled cards
    // const [burnCard, setBurnCard] = useState(null); // Initial Deck containing 16 shuffled cards
    // const [cardsArr, setCardsArr] = useState([]); // Array Containing 15 Card codes
    // const [imagesArr, setImagesArr] = useState([]); // Array Containing 15 Card images

    // const [shuffledDeck, setShuffledDeck] = useState(null); // New shuffled deck containing 15 cards

    // const [playedCards, setPlayedCards] = useState(null); // Played Cards containing 15 cards

    // const [playerHandOne, setPlayerHandOne] = useState(false); // Player 1 Hand containing 1 or 2 cards
    // const [playerHandTwo, setPlayerHandTwo] = useState(false); // Player 2 Hand containing 1 or 2 cards
    // const [playerHandThree, setPlayerHandThree] = useState(false); // Player 3 Hand containing 1 or 2 cards
    // const [playerHandFour, setPlayerHandFour] = useState(false); // Player 4 Hand containing 1 or 2 cards

    this.state = {
      players: ['lachlan', 'joe', 'wes', 'liz'],
      name: '',
      initialDiscard: 4,
      cardsInDeck: [6, 4, 2, 2, 3, 1, 1, 8],
      cardsPlayed: [1, 3, 5, 7]
    }
  }

  // LOGIC: Shuffle Deck



  addCardToPlayerHand = () => {
    var updatedCardsInDeck = [...this.state.cardsInDeck];
    var cardToBePlayed = updatedCardsInDeck.pop();
    var updatedCardsPlayed = [...this.state.cardsPlayed];
    updatedCardsPlayed.push(cardToBePlayed);
    this.setState({ cardsInDeck: updatedCardsInDeck });
    this.setState({ cardsPlayed: updatedCardsPlayed });
  }

  render() {
    console.log(cardList);
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

              <ModalCheatSheet />

              <Button variant="secondary" onClick={this.addCardToPlayerHand}> Next Move</Button>
              <CardsPlayed cardsPlayed={this.state.cardsPlayed} />
              <Card strength={this.state.initialDiscard} />

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
