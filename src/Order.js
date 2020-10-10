import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Order extends Component {

    render() {

        return (

            <div className="App">
                <Link to='/'>
                    <button
                        className="mx-auto btn btn-success">
                        Home
                    </button>
                </Link>
                <h2>Order Confirmation</h2>
                <p>Order ID: {this.props.theorderID}</p>
                

            </div>
        );
    }
}

export default Order;