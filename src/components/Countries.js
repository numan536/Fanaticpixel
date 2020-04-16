import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Countries extends React.Component {

    render() {
        return (
            <div className="countries-table overflow-auto">
                <Table bordered hover>
                    <tbody>
                        {
                            this.props.countries.map(item => {
                                return (
                                    <tr>

                                        <td style={{ cursor: "pointer", backgroundColor: this.props.singlecountry && this.props.singlecountry.country === item.country ? '#dee2e6' : '' }} onClick={() => this.props.handleClick(item)}>{item.country}  </td>


                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}


export default Countries;