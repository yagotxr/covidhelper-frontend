import React, { Component } from 'react'
import { Card, Row, Col, Button, Form } from 'react-bootstrap'

class Chat extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const text = 'This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.';
        return (
            <div>
                <Card style={{height:'31.3rem'}}>
                    <Card.Body>
                        <div style={{overflow: 'scroll', flex:'1'}}>
                            {text}
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Form>
                            <Row>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Mensagem" />
                                </Col>
                                <Col>
                                    <Button block>Enviar</Button>
                                </Col>

                            </Row>
                        </Form>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Chat