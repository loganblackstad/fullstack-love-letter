import React, { Component } from 'react'
import styles from './CardsPlayed.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Card from './Card';


export default class CardsPlayed extends Component {

  // const cardRef = CardList[{ this.props.initialDiscard }]

  componentDidMount() {
    // console.log(this.props.cardsPlayed);
  }



  render() {

    const cardsPlayed = this.props.cardsPlayed;

    return (
      <div className={styles.CardsPlayed} >
        <p>Cards Played: </p>
        {
          cardsPlayed.map((strength, ind) => {
            return (
              <div className={styles.CardContainer}>
                <Card strength={strength} ind={ind} selected={false} index={null} />
              </div>
            )
          })
        }
      </div>
    )
  }
}