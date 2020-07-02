
import React, { Component } from 'react'
import styles from './Dashboard.module.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export default class Dashboard extends Component {

  componentDidMount() {
    console.log(this.props.players);
  }
  render() {
    return (
      <div className={styles.Dashboard}>
        < hr />
        <h1>Love Letter</h1>
        <hr />
        <p>Love Letter is a game of risk, deduction, and luck for 2–4 players. Your goal is to get your love letter into Princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!</p>
        {/* <Button variant="primary">Enter Room</Button> */}
        <Button variant="primary" style={{ textDecoration: "none" }}><Link to="/room" style={{ textDecoration: "none" }}>Join Game</Link></Button>
        <div></div>
        <h2 className={styles.Players}>Players</h2>
        <Container>
          <Row className={styles.PlayerRow}>
            <Col xs={2}>1.&nbsp;&nbsp;&nbsp;</Col>
            <Col xs={8}>{this.props.players[0]}</Col>
          </Row>
          <Row className={styles.PlayerRow}>
            <Col>2.&nbsp;&nbsp;&nbsp;</Col>
            <Col xs={8}>{this.props.players[1]}</Col>
          </Row>
          <Row className={styles.PlayerRow}>
            <Col>3.&nbsp;&nbsp;&nbsp;</Col>
            <Col xs={8}>{this.props.players[2]}</Col>
          </Row>
          <Row className={styles.PlayerRow}>
            <Col>4.&nbsp;&nbsp;&nbsp;</Col>
            <Col xs={8}>{this.props.players[3]}</Col>
          </Row>
        </Container>
      </div >
    )
  }
}