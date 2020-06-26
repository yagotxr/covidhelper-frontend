import React, { Component } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import { Container } from 'reactstrap';
import Chat from '../Chat/Chat'

class ChatPage extends Component {
    constructor() {
        super();
        this.state = {
            doctors: [
                {
                    name: 'JSIAJSIAHSUAHSUAHSUAS',
                    online: true
                },
                {
                    name: 'JSIAJSIAHSUAHUAHSUAAS',
                    online: true
                },
                {
                    name: 'JSIAJSIAHSUAHSUAHSUAAS',
                    online: true
                },
                {
                    name: 'JSIAJSIAHUAHSUAHSUAAS',
                    online: false
                },
                {
                    name: 'JSIAJSIAHSUAHUAHSUAAS',
                    online: false
                },
                {
                    name: 'JSIAJSIAHSUAHSUAHUAAS',
                    online: true
                },
                {
                    name: 'JSIAJSIASUAHSUAHSUAAS',
                    online: true
                },
                {
                    name: 'JSIAJSIASUAHSUAHSUAAS',
                    online: false
                },
                {
                    name: 'JSIAJSIAHSUASUAHSUAAS',
                    online: true
                },
                {
                    name: 'JSIAJSIAHSUAHSAHSUAAS',
                    online: true
                },
            ]
        }

    }

    render() {
        return (
            <div style={{ padding: '25px' }}>

                <Container>
                    <h1><b>Chat</b></h1>
                    <Row>
                        <Col md={4} style={{ padding: '0px' }}>
                            {this.state.doctors.map(doctor =>
                                <ListGroup>
                                    {doctor.online ?
                                        <ListGroup.Item
                                            variant='success'
                                            action
                                            href={'#' + doctor.name}>
                                            {doctor.name}
                                        </ListGroup.Item>
                                        :
                                        <ListGroup.Item
                                            action
                                            href={'#' + doctor.name}>
                                            {doctor.name}
                                        </ListGroup.Item>
                                    }
                                </ListGroup>
                            )}
                        </Col>
                        <Col>
                            <Chat />
                        </Col>
                    </Row>

                </Container>



            </div>
        );
    }

}

export default ChatPage