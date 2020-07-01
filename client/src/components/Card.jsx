import React, { Component } from 'react'
import styles from './Card.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import cardList from '../CardList'

export default class Card extends Component {

  componentDidMount() {
    // console.log(this.props.strength);
  }

  render() {
    // console.log(cardList);
    const cardRef = cardList[this.props.strength];
    // console.log(cardRef.img);
    return (
      <div>
        <div>
          <div className={styles.Card}>
            <div className={styles.CardInner}>
              <div className={styles.CardBack} style={{ backgroundImage: `url(${cardRef.img})` }}>
              </div>
              <div className={styles.CardFront}>
                test
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
