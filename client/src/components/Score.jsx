import React, { Component } from 'react'
import styles from './Score.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Card from './Card';


export default class Score extends Component {

  // const cardRef = CardList[{ this.props.initialDiscard }]

  componentDidMount() {
    console.log(this.props.scoreArr);
  }

  renderMultipleLoveLetters = (playerScore) => {
    // player score passed in through props 
    // return an array of love letter images multiplied by playerscore
    // <img src={} alt="A Love Letter Token" className={styles.LoveLetterToken}/>

  }

  render() {

    const scoreArr = this.props.scoreArr;
    const highestLastCard = {};

    return (
      <div className={styles.Score} >
        <p>Love Letter reached the ${}: </p>
        {
          finalCards.map((strength, ind) => {
            return (
              <div className={styles.CardContainer}>
                <Card strength={strength} ind={ind} />
                <p>player</p>
                <><>
                </div>
            )
          })
        }
                </div>
    )
  }
}