import React from 'react';
import axios from 'axios';
import { Col, Row, Container } from "react-bootstrap"

class Singlecouuntry extends React.Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <h4>{this.props.singlecountry?.country}</h4>
                    <Row className="mt-4">
                        {/* <Col> */}
                        {/* <div className="col-12 col-md-12 col-sm-2"> */}
                        <Col style={{ borderRight: '5px solid black' }}>
                            <b>Total Cases</b>
                            <h4><div>{this.props.singlecountry?.total_case}</div></h4>
                        </Col>
                        <Col style={{ borderRight: '5px solid black' }}>
                            <b>Active cases</b>
                            <h4><div>{this.props.singlecountry?.active_cases}</div></h4>
                        </Col>
                        <Col style={{ borderRight: '5px solid black' }}>
                            <b>New cases</b>
                            <h4><div>{this.props.singlecountry?.new_case}</div></h4>
                        </Col>
                        <Col style={{ borderRight: '5px solid black' }}>
                            <b>Total Deaths</b>
                            <h4><div>{this.props.singlecountry?.total_deaths}</div></h4>
                        </Col>
                        <Col style={{ borderRight: '5px solid black' }}>
                            <b>New Deaths</b>
                            <h4><div>{this.props.singlecountry?.new_deaths}</div></h4>
                        </Col>
                        <Col >
                            <b>Total Recovered</b>
                            <h4><div>{this.props.singlecountry?.total_recovered}</div></h4>
                        </Col>


                        {/* </div> */}

                        {/* </Col> */}

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Singlecouuntry;