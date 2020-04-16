import React from 'react';
import { Row, Col, Table, Container } from 'react-bootstrap';
import axios from 'axios';
import './index.css'
class Totaldata extends React.Component {
    state = {
        world: []
    }
    componentDidMount() {
        axios.get('https://www84.fanaticpixel.com/covid/data/get_totals')

            .then((response) => {
                console.log('response', response)
                this.setState({
                    world: response.data
                })
            })
            .catch(() => console.log("error"))
    }
    render() {
        return (
            <div>
                <Container fluid>

                    <div className="main container mt-4">
                        <Row >
                            {/* <Col> */}
                            {/* <div className="col-12 col-md-12 col-sm-2"> */}
                            <Col style={{ borderRight: '5px solid black' }}>
                                <b>Total Cases</b>
                                <h4><div>{this.state.world[0]?.total_case}</div></h4>
                            </Col>
                            <Col style={{ borderRight: '5px solid black' }}>
                                <b>Active cases</b>
                                <h4><div>{this.state.world[0]?.active_cases}</div></h4>
                            </Col>
                            <Col style={{ borderRight: '5px solid black' }}>
                                <b>New cases</b>
                                <h4><div>{this.state.world[0]?.new_case}</div></h4>
                            </Col>
                            <Col style={{ borderRight: '5px solid black' }}>
                                <b>Total Deaths</b>
                                <h4><div>{this.state.world[0]?.total_deaths}</div></h4>
                            </Col>
                            <Col style={{ borderRight: '5px solid black' }}>
                                <b>New Deaths</b>
                                <h4><div>{this.state.world[0]?.new_deaths}</div></h4>
                            </Col>
                            <Col >
                                <b>Total Recovered</b>
                                <h4><div>{this.state.world[0]?.total_recovered}</div></h4>
                            </Col>


                            {/* </div> */}

                            {/* </Col> */}

                        </Row>

                    </div>
                </Container>
            </div >
        )
    }
}
export default Totaldata;