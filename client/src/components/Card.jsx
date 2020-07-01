import React, { Component } from 'react'
import styles from './Card.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import cardList from '../CardList'

export default class Card extends Component {


  componentDidMount() {
    // console.log(this.props.strength);
  }

  transformStyle = (ind) => {
    var multiplier = -120 * ind;
    let style = `translate(${multiplier}px)`;
    return { transform: style }
  }

  render() {
    // console.log(cardList);
    const cardRef = cardList[this.props.strength];
    // console.log(cardRef.img);
    return (
      <div className={styles.Card} style={this.transformStyle(this.props.ind || 0)}>
        <div className={styles.CardInner}>
          <img src={cardRef.img} className={styles.CardBack} />
        </div>
      </div>
    )
  }
}
