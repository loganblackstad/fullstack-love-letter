import c1 from './img/c1.png';
import c2 from './img/c2.png';
import c3 from './img/c3.png';
import c4 from './img/c4.png';
import c5 from './img/c5.png';
import c6 from './img/c6.png';
import c7 from './img/c7.png';
import c8 from './img/c8.png';


const cardList = {
  '1': {
    name: 'Guard',
    strength: 1,
    periodicity: 5,
    effect: "Guess a player's hand",
    img: c1
  },
  '2': {
    name: 'Priest',
    strength: 2,
    periodicity: 2,
    effect: "Look at a player's hand",
    img: c2
  },
  '3': {
    name: 'Baron',
    strength: 3,
    periodicity: 2,
    effect: "Compare hands; lower strength is out",
    img: c3
  },
  '4': {
    name: 'Handmaid',
    strength: 4,
    periodicity: 2,
    effect: "Protection until your next turn",
    img: c4
  },
  '5': {
    name: 'Prince',
    strength: 5,
    periodicity: 2,
    effect: "One player discards their hand",
    img: c5
  },
  '6': {
    name: 'King',
    strength: 6,
    periodicity: 1,
    effect: "Trade hands",
    img: c6
  },
  '7': {
    name: 'Countess',
    strength: 7,
    periodicity: 1,
    effect: "Discard if other card is King or Prince",
    img: c7
  },
  '8': {
    name: 'Princess',
    strength: 8,
    periodicity: 1,
    effect: "Lose if discarded",
    img: c8
  }
}

export default cardList;