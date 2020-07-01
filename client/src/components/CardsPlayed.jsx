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
    return (
      <div>
        {this.props.cardsPlayed.map(strength => { return <Card strength={strength} /> })}
      </div>
    )
  }
}