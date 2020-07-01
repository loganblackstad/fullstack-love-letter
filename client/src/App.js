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

    this.state = {
      players: ['lachlan', 'joe', 'wes', 'liz'],
      name: '',
      cards: [],
      initialDiscard: ['card4'],
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
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>Back to Dashboard</Link>
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
