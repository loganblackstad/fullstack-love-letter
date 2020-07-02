import React, { Component } from 'react'
import styles from './Hand.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Card from './Card';


export default class Hand extends Component {

  // const cardRef = CardList[{ this.props.initialDiscard }]

  componentDidMount() {
    console.log(this.props.playerHand);
  }


  render() {

    const { playerHand } = this.props.playerHand;

    return (
      <div className={styles.PlayerHand} >
        <p>Player Hand: </p>
        {
          playerHand.map((strength, ind) => {
            return (
              <div className={styles.CardContainer}>
                <Card strength={strength} ind={0} />
              </div>
            )
          })
        }
      </div>
    )
  }
}