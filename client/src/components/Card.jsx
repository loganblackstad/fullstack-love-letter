import React, { Component } from 'react'
import styles from './Card.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import cardList from '../CardList'

export default class Card extends Component {


  componentDidMount() {
    // console.log(String(this.props.strength));
    // console.log(cardList['1']);
  }

  transformStyle = (ind) => {
    var multiplier = -120 * ind;
    let style = `translate(${multiplier}px)`;
    return { transform: style }
  }

  handleClick = () => {

  }

  render() {
    console.log(cardList);
    const cardRef = cardList[String(this.props.strength)];
    let isSelected = { border: '3px solid yellow' };
    // console.log(cardRef);
    return (
      <div className={styles.Card} style={{ ...this.transformStyle(this.props.ind || 0), isSelected }} onClick={this.handleClick}>
        <div className={styles.CardInner}>
          <img src={cardRef.img} className={styles.CardBack} />
        </div>
      </div>
    )
  }
}
