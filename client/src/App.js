import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
// import script
import Script from 'react-script-tag';
import GenerateRandomRoom from './generateRandomRoom.js';

// import axios from "axios";
import Card from './components/Card';
import CardsPlayed from './components/CardsPlayed';
import Hand from './components/Hand';
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
      // define state of game play
      arrOfPlayers: {
        '1': {
          name: 'lachlan',
          currCard: 1,
          loveLetters: 2,
          isVisible: true,
        },
        '2': {
          name: 'joe',
          currCard: 3,
          loveLetters: 0,
          isVisible: true,
        },
        '3': {
          name: 'wes',
          currCard: 5,
          loveLetters: 2,
          isVisible: true,
        },
        '4': {
          name: 'liz',
          currCard: 8,
          loveLetters: 1,
          isVisible: true,
        },
      },  
      roomCodes: ['WXFS', 'LHDQ', 'NVDW'],
      randomRoom: 'XXXX',
      randRoom: 'YYYY',

      name: '',

      // state for current game
      initialDiscard: 4,
      standardDeck: [1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8],
      cardsInDeck: [6, 4, 2, 2, 3, 1, 1, 8],
      cardsPlayed: [1, 3, 5, 7],
      playerHandOne: [1, 2],
      playerHandTwo: [3],
      playerHandThree: [4],
      playerHandFour: [8],
      number: 3,
    }
  }

  // LOGIC: Shuffle Deck

  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = "./generateRandomRoom.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }


  componentDidMount() {
    this.setState({ number: this.generateNumber() })
    this.setState({ randomRoom: this.generateRandomRoom() })
    this.setState({ randRoom: this.GenerateRandomRoom })
    this.setState({ initialDiscard: this.generateRandomDiscard() })
    // this.setState({ playerHandOne: this. })
    // this.setState({ playerHandTwo: this. })
    // this.setState({ playerHandThree: this. })
    // this.setState({ playerHandFour: this. })
  }

  generateRandomRoom = () => {
    var randomRoomCode = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length; // == 26
    for (var i = 0; i < 4; i++) {
      randomRoomCode += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomRoomCode;
  }

  generateRandomDiscard = () => {
    var initialDiscard =  Math.floor(Math.random() * (15 - 0 + 1) + 0)
    return initialDiscard;
  }

  generateInitialHands = () => {
    var initialDiscard =  Math.floor(Math.random() * (15 - 0 + 1) + 0)
    return initialDiscard;
  }

  generateNumber = () => {
    return Math.floor(Math.random() * (10 - 0 + 1) + 0)
  }

  addCardToPlayerHand = () => {
    var updatedCardsInDeck = [...this.state.cardsInDeck];
    var cardToBePlayed = updatedCardsInDeck.pop();
    var updatedCardsPlayed = [...this.state.cardsPlayed];
    updatedCardsPlayed.push(cardToBePlayed);
    this.setState({ cardsInDeck: updatedCardsInDeck });
    this.setState({ cardsPlayed: updatedCardsPlayed });
  }

  _onMyScriptLoad = () => {/* ... */ };
  _onMyScriptError = () => {/* ... */ };

  render() {
    console.log(cardList);
    console.log(GenerateRandomRoom);
    console.log("randomRoom: " + this.state.randomRoom);
    console.log("randRoom: " + this.state.randRoom);


    return (
      <BrowserRouter>
        <div className="App">


          {/* render Header component */}
          <Header />

          <Switch>

            {/* render Dashboard component */}
            <Route path="/" exact>
              <Dashboard players={this.state.players} arrOfPlayers={this.state.arrOfPlayers}/>
            </Route>

            {/* render Route for main room */}
            {/* <Route path="/room">
              <ModalCheatSheet />
              <Button variant="primary" style={{ width: "150px" }} onClick={this.addCardToPlayerHand}> Next Move</Button>
              <CardsPlayed cardsPlayed={this.state.cardsPlayed} />
              <Card strength={this.state.initialDiscard} />
              <Hand playerHand={this.state.playerHandOne} />
              <Hand playerHand={this.state.playerHandTwo} />
              <Hand playerHand={this.state.playerHandThree} />
              <Hand playerHand={this.state.playerHandFour} />

            </Route>
             */}
            {/* 
            <Route path="/room/:id">
              <Room roomCode={this.state.roomCode}>
            </Route>


            <Route path="/recipes/:id" /> 
            */}

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
