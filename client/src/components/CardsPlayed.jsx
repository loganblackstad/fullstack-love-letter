import React, { Component } from 'react'
import styles from './CardsPlayed.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Card from './Card';


export default class CardsPlayed extends Component {

  // const cardRef = CardList[{ this.props.initialDiscard }]

  componentDidMount() {
    console.log(this.props.cardsPlayed);
  }

  render() {
    const cardsPlayed = this.props.cardsPlayed;
    return (
      <div className={styles.CardsPlayed}>
        {
          cardsPlayed.map(str => {
            return (
              <div className={styles.CardContainer}>
                <Card strength={str} />
              </div>
            )
          })
        }
      </div>
    )
  }
}