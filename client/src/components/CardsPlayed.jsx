import React, { Component } from 'react'
import styles from './PlayedCards.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import cardList from '../CardList'
import Card from './Card';


export default class CardsPlayed extends Component {

  // const cardRef = CardList[{ this.props.initialDiscard }]

  componentDidMount() {
    console.log(this.props.cardsPlayed);
  }

  render() {
    const cardsPlayed = this.props.cardsPlayed;
    return (
      <div>
        {cardsPlayed.map(str => { return <Card strength={str} /> })}
      </div>
    )
  }
}