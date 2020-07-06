import React, { Component } from 'react'
import styles from './Score.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Card from './Card';


export default class Score extends Component {

  // const cardRef = CardList[{ this.props.initialDiscard }]

  componentDidMount() {
    console.log(this.props.arrCountOfLoveLetters);
  }

  renderMultipleLoveLetters = (playerScore) => {
    // player score passed in through props 
    // return an array of love letter images multiplied by playerscore
    // <img src={} alt="A Love Letter Token" className={styles.LoveLetterToken}/>

  }

  render() {

    const arrCountOfLoveLetters = this.props.arrCountOfLoveLetters;
    const finalHands = this.props.finalHands;
    const winningHand = {};

    return (
      <div className={styles.Score} >

        {/* <p>Love Letter reached the ${//PRINCESS}: </p> */}
        <hr />

        <p>The Love Letter reached the ${}: </p>
        <img src={} alt="A Love Letter Token" className={styles.CurrentLoveLetterToken} />

        <hr />

        {
          finalHands.map((playerName, finalCardStrength) => {
            return (
              <div className={styles.CardContainer}>
                <Card strength={finalCardStrength} ind={ind} />
                <p>{playerName}</p>
                <div>{renderMultipleLoveLetters(playerScore)}</div>
              </div>
            )
          })
        }

      </div>
    )
  }
}