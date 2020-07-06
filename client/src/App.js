import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
// import script
import Script from 'react-script-tag';
import {
  GenerateRandomRoom,
  GenerateRandomDiscard,
  Function2
} from './appMethods.js';

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
          player: 1,
          name: 'lachlan',
          hand: [1, 2],
          loveLetters: 2,
          isVisible: true,
        },
        '2': {
          player: 2,
          name: 'joe',
          hand: [3],
          loveLetters: 0,
          isVisible: true,
        },
        '3': {
          player: 3,
          name: 'wes',
          hand: [5],
          loveLetters: 2,
          isVisible: true,
        },
        '4': {
          player: 4,
          name: 'liz',
          hand: [8],
          loveLetters: 1,
          isVisible: true,
        },
      },
      roomCodes: ['WXFS', 'LHDQ', 'NVDW'],
      randomRoom: 'XXXX',
      randRoom: 'YYYY',
      currentPlayer: {},
      name: '',

      // state for current game
      initialDiscard: 4,
      standardDeck: [1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8],
      cardsInDeck: [1, 1, 3, 4, 5, 6],
      cardsPlayed: [],
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
    this.setState({ randomRoom: this.generateRandomRoom() });
    // this.setState({ randomRoom: this.generateRandomRoom() });
    this.setState({ randRoom: GenerateRandomRoom() });
    this.setInitialGameState();
    // this.generateInitialHands();
    this.setState({ currentPlayer: this.state.arrOfPlayers['1'] });

    // GenerateRandomDiscard();
    // this.setState({ playerHandOne: this. })
    // this.setState({ playerHandTwo: this. })
    // this.setState({ playerHandThree: this. })
    // this.setState({ playerHandFour: this. })
  }

  generateRandomRoom = () => {
    let randomRoomCode = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length; // == 26
    for (let i = 0; i < 4; i++) {
      randomRoomCode += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomRoomCode;
  }

  setInitialGameState = () => {
    let initialDiscardIndex = Math.floor(Math.random() * (15 - 0 + 1) + 0);
    let standardDeck = [...this.state.standardDeck];
    // let ind = standardDeck.findIndex((ele) => ele == initialDiscardIndex);
    // console.log("ind:");  
    // console.log(ind);
    let initialDiscard = standardDeck.splice(initialDiscardIndex, 1);
    console.log('standarddeck:')
    console.log(standardDeck)
    // this.setState({ cardsInDeck: standardDeck });

    let arr = { ...this.state.arrOfPlayers };
    let a = standardDeck;
    console.log("a:");
    console.log(a);
    let n;
    let r = [];
    for (n = 1; n <= 5; ++n) {
      let i = Math.floor((Math.random() * (15 - n)) + 1);
      r.push(a[i]);
      a.splice(i, 1)
    }
    console.log(a);
    console.log(r);

    arr['1'].hand = r.slice(0, 2);
    arr['2'].hand = r.slice(2, 3);
    arr['3'].hand = r.slice(3, 4);
    arr['4'].hand = r.slice(4, 5);

    this.setState({ arrOfPlayers: arr });
    this.setState({ cardsInDeck: a });
    this.setState({ initialDiscard: initialDiscard });

  }

  // generateInitialHands = () => {

  //   let arr = { ...this.state.arrOfPlayers }
  //   let a = [...this.state.cardsInDeck];
  //   console.log(a);
  //   let n;
  //   let r = [];
  //   for (n = 1; n <= 5; ++n) {
  //     let i = Math.floor((Math.random() * (15 - n)) + 1);
  //     r.push(a[i]);
  //     a.splice(i, 1)
  //   }
  //   console.log(a);
  //   console.log(r);

  //   arr['1'].hand = r.slice(0, 2);
  //   arr['2'].hand = r.slice(2, 3);
  //   arr['3'].hand = r.slice(3, 4);
  //   arr['4'].hand = r.slice(4, 5);

  //   this.setState({ arrOfPlayers: arr });
  //   this.setState({ cardsInDeck: a });
  // }


  addCardToPlayerHand = () => {
    let updatedCardsInDeck = [...this.state.cardsInDeck];
    let cardToBePlayed = updatedCardsInDeck.pop();
    let updatedCardsPlayed = [...this.state.cardsPlayed];
    updatedCardsPlayed.push(cardToBePlayed);
    this.setState({ cardsInDeck: updatedCardsInDeck });
    this.setState({ cardsPlayed: updatedCardsPlayed });
  }

  _onMyScriptLoad = () => {/* ... */ };
  _onMyScriptError = () => {/* ... */ };

  render() {
    console.log(cardList);
    // console.log(GenerateRandomRoom());
    // console.log("randomRoom: " + this.state.randomRoom);
    // console.log("randRoom: " + this.state.randRoom);


    return (
      <BrowserRouter>
        <div className="App">


          {/* render Header component */}
          <Header />

          <Switch>

            {/* render Dashboard component */}
            <Route path="/" exact>
              <Dashboard players={this.state.players} arrOfPlayers={this.state.arrOfPlayers} />
            </Route>

            {/* render Route for main room */}
            <Route path="/room">
              <ModalCheatSheet />
              <Button variant="primary" style={{ width: "150px" }} onClick={this.addCardToPlayerHand}> Next Move</Button>
              <br />
              <Button variant="primary" style={{ width: "150px", marginTop: "7px" }} > Play Card</Button>
              <CardsPlayed cardsPlayed={this.state.cardsPlayed} />
              <Card strength={this.state.initialDiscard} selected={false} index={null} />
              <Hand playerHand={this.state.arrOfPlayers['1'].hand} player='1' currentPlayer={this.state.currentPlayer} />
              <Hand playerHand={this.state.arrOfPlayers['2'].hand} player='2' currentPlayer={this.state.currentPlayer} />
              <Hand playerHand={this.state.arrOfPlayers['3'].hand} player='3' currentPlayer={this.state.currentPlayer} />
              <Hand playerHand={this.state.arrOfPlayers['4'].hand} player='4' currentPlayer={this.state.currentPlayer} />
            </Route>

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
