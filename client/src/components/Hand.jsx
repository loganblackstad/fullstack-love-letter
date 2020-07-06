import React, { Component } from 'react'
import styles from './Hand.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Card from './Card';


export default class Hand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    }
  }
  // const cardRef = CardList[{ this.props.initialDiscard }]

  componentDidMount() {
    // console.log('Player 1 Hand:');
    // console.log(this.props.playerHand);
  }

  handleClick = (i) => {
    this.setState({ selected: i });
  }

  render() {

    return (
      <div className={styles.PlayerHand} style={this.props.player == this.props.currentPlayer.player ? { border: "solid 1px red" } : {}}>
        <p>Player Hand {this.props.player}: </p>
        {
          this.props.playerHand.map((strength, ind) => {
            return (
              <div className={styles.CardContainer}>
                <Card strength={strength} ind={0} selected={this.state.selected} index={ind} handleClick={() => { this.handleClick(ind) }} />
              </div>
            )
          })
        }
      </div>
    )
  }
}