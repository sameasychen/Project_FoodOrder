import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import OrderInfo from './OrderInfo';
import RightCol from './RightCol';



class Order extends Component {

    constructor(props) {
        super(props);



    }

    render() {

        let props = this.props;

        return (

            <div className="Content row mx-auto contentwidth py-3">
                <OrderInfo theorderID={props.theorderID}/>


            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish}/>


        </div>
        );
    }
}

export default Order;