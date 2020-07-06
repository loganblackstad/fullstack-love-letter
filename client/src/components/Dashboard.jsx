
import React, { Component } from 'react'
import styles from './Dashboard.module.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import loveletter from '../img/love-letter.png'


export default class Dashboard extends Component {

  componentDidMount() {
    // console.log([this.props.arrOfPlayers['1'].name,this.props.arrOfPlayers['2'].name,this.props.arrOfPlayers['3'].name,this.props.arrOfPlayers['4'].name]);
    // console.log([this.props.arrOfPlayers['1'].loveLetters,this.props.arrOfPlayers['2'].loveLetters,this.props.arrOfPlayers['3'].loveLetters,this.props.arrOfPlayers['4'].loveLetters]);
  }


  render() {
    // array of players
    const players = [this.props.arrOfPlayers['1'].name,this.props.arrOfPlayers['2'].name,this.props.arrOfPlayers['3'].name,this.props.arrOfPlayers['4'].name];
    const arrOfLoveLetters = [this.props.arrOfPlayers['1'].loveLetters,this.props.arrOfPlayers['2'].loveLetters,this.props.arrOfPlayers['3'].loveLetters,this.props.arrOfPlayers['4'].loveLetters]

    return (
      <div className={styles.Dashboard}>
        < hr />
        <div style={{display:"flex", alignText:"center", justifyContent:"center"}}>
        <img className={styles.LoveLetterToken} src={loveletter} alt="love letter token"/>
        <h1>&nbsp;&nbsp;Love Letter&nbsp;&nbsp;</h1>
        <img className={styles.LoveLetterToken} src={loveletter} alt="love letter token"/>
        </div>
        <hr />
        <p>Love Letter is a game of risk, deduction, and luck for 2–4 players. Your goal is to get your love letter into Princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!</p>
        {/* <Button variant="primary">Enter Room</Button> */}
        <Button variant="primary" style={{ textDecoration: "none" }}><Link to="/room" style={{ textDecoration: "none" }}>Join Game</Link></Button>
        <div></div>
        <h2 className={styles.Players}>Players</h2>
        <Container>
          <Row className={styles.PlayerRow}>
            <Col xs={2}>1.&nbsp;&nbsp;&nbsp;{players[0]}</Col>
            <Col xs={2}>love letters:&nbsp;&nbsp;{arrOfLoveLetters[0]}</Col>
          </Row>
          <Row className={styles.PlayerRow}>
            <Col xs={2}>2.&nbsp;&nbsp;&nbsp;{players[1]}</Col>
            <Col xs={2}>love letters:&nbsp;&nbsp;{arrOfLoveLetters[1]}</Col>
          </Row>
          <Row className={styles.PlayerRow}>
            <Col xs={2}>3.&nbsp;&nbsp;&nbsp;{players[2]}</Col>
            <Col xs={2}>love letters:&nbsp;&nbsp;{arrOfLoveLetters[2]}</Col>
          </Row>
          <Row className={styles.PlayerRow}>
            <Col xs={2}>4.&nbsp;&nbsp;&nbsp;{players[3]}</Col>
            <Col xs={2}>love letters:&nbsp;&nbsp;{arrOfLoveLetters[3]}</Col>
          </Row>
        </Container>
      </div >
    )
  }
}