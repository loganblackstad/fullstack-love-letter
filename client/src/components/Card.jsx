import React, { Component } from 'react'
import styles from './Card.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import cardList from '../CardList'

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    }
  }

  componentDidMount() {
    // console.log(String(this.props.strength));
    // console.log(cardList['1']);
  }

  transformStyle = (ind) => {
    var multiplier = -120 * ind;
    let style = `translate(${multiplier}px)`;
    return { transform: style }
  }



  render() {
    console.log(cardList);
    const cardRef = cardList[String(this.props.strength)];
    let isSelected = false;
    // console.log(cardRef);
    return (
      <div className={styles.Card} style={this.props.selected === this.props.index ? { ...this.transformStyle(this.props.ind), border: '3px solid yellow' } : this.transformStyle(this.props.ind)} onClick={this.props.handleClick}>
        <div className={styles.CardInner}>
          <img src={cardRef.img} className={styles.CardBack} />
        </div>
      </div>
    )
  }
}
