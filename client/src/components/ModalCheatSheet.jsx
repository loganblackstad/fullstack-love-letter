import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import cardList from '../img/c-list-of-cards.png';
import cardList2 from '../img/cheatsheet2.jpg';

class ModalCheatSheet extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="info" className="m-2" style={{ width: "150px" }} onClick={this.handleShow}>
          Cheat Sheet
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} style={{ color: 'white', backgroundColor: 'rgb(90,90,90)', borderRadius: '10px' }}>
          <Modal.Header closeButton style={{ color: 'white', backgroundColor: 'rgb(60,60,60)' }}>
            <Modal.Title style={{ color: 'white', backgroundColor: 'rgb(60,60,60)' }}>Cheat Sheet</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: 'rgb(60,60,60)' }}><img src={cardList2} style={{ width: '100%', borderRadius: '10px' }} alt="Pictures of Cards" /></Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button> 
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

// allowing for hooks --> exporting a functional component containing class components
export default () => (<div><ReactBootstrapStyle /><ModalCheatSheet /></div>)