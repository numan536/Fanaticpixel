import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Row, Nav, Col, NavLink, Button } from 'react-bootstrap';
import { Link, BrowserRouter } from 'react-router-dom';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Map from './components/Map';
import Totaldata from './components/Totaldata'
import axios from 'axios';
import Countries from './components/Countries';
import Singlecountry from './components/Singlecountry';
import Chart from './components/Chart';


class App extends React.Component {
  state = {
    allcountries: [],
    country: [],
    singlecountry: null,
    singleCountryAllData: []
  }
  componentDidMount() {
    axios.get('https://www84.fanaticpixel.com/covid/data/get_countries_data')

      .then((response) => {
        console.log('response', response)
        this.setState({
          allcountries: response.data.sort((a, b) => parseInt(b.total_case.replace(",", "")) - parseInt(a.total_case.replace(",", "")))
        })
      })
      .catch(() => console.log("error"))
  }
  handleClick = async (coutryData) => {
    const res = await axios.get(`https://www84.fanaticpixel.com/covid/data/get_country_data/${coutryData.country}`);

    this.setState({
      singlecountry: coutryData,
      singleCountryAllData: res.data
    })
  }
  render() {
    console.log("this.state", this.state)
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img src="/images/corona-logo-1.png" style={{ width: 300, height: 106 }} />
          </Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Countries</Nav.Link> */}
          </Nav>
        </Navbar>
        <Container fluid>
          <div>
            <Totaldata />
          </div>
          <div>
            <Container fluid className="mt-5">
              <Row className="mt-5px">
                <Col>
                  <Map data={this.state.allcountries} />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="row mt-5">
            <div className="col-md-8" >

              {this.state.singlecountry ? <Singlecountry singlecountry={this.state.singlecountry} /> : ''}
              {this.state.singleCountryAllData.length ? <Chart key={1} id={"total_chart"} data={this.state.singleCountryAllData} /> : ''}
            </div>
            <div className="col-md-4" >
              <h4>Countries</h4>
              <Countries singlecountry={this.state.singlecountry} countries={this.state.allcountries} handleClick={this.handleClick} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">{this.state.singleCountryAllData.length ? <Chart key={2} id={"death_chart"} data={this.state.singleCountryAllData} deaths={true} /> : ''}</div>
            <div className="col-md-6">{this.state.singleCountryAllData.length ? <Chart key={3} id={"recovered_chart"} data={this.state.singleCountryAllData} recovered={true} /> : ''}</div>
          </div>
        </Container>
      </div>


    )
  }
}

export default App;


