import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Slider from './Components/Slider';
import kanapka from './kanapka.jpg';
import trybtyk from './trybtyk.jpg';
import zlew from './zlew.jpg';
import ja from './ja.jpg';



export const Home = () =>(
    <>
    <Slider />
    <Container style={{paddingTop: '2rem', paddingBotoom: '2rem'}}>
        <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={kanapka}/>
                    <Card.Body>
                        <Card.Title>Kanapka</Card.Title>
                        <Card.Text>
                            Akryl na płótnie 40x30cm
                        </Card.Text>
                        <Button variant="primary">Sprawdź</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={trybtyk}/>
                    <Card.Body>
                        <Card.Title>Trybtyk</Card.Title>
                        <Card.Text>
                            Akryl na płótnie:
                            3 razy 35x42cm
                        </Card.Text>
                        <Button variant="primary">Sprawdź</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={zlew}/>
                    <Card.Body>
                        <Card.Title>Zlew</Card.Title>
                        <Card.Text>
                        Akryl na płótnie: 70x55cm
                        </Card.Text>
                        <Button variant="primary">Sprawdź</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    <Container style={{paddingTop: '2rem', paddingBotoom: '2rem'}}>
        <Row>
            <Col md={7}>
                <img src={ja} height={400} />
            </Col>
            <Col md={5}>
                <h2>Cześć jestem Mariia :)</h2>
               <p>Na tej stronie możesz kupić moje obrazy lub złożyć zamówienie.
                  Chętnie maluje akrylem jak i olejem. w suchej technice operuje pastelami.
                  Zapraszam do oglądania! 
                   </p> 
            </Col>
        </Row>
    </Container>
</>
)