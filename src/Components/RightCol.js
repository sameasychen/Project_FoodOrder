import React from 'react';
import { Route, Link } from 'react-router-dom'

import OrderList from './OrderList';

const RightCol = props => {

        return (

            <div className="container-fluid border col-lg-2">

                <OrderList orders={props.orders} onDelete={props.onDelete} />

                <Link id="submit" to='/order' >
                    <button
                        className="mx-auto btn btn-success"
                        onClick={props.onSubmit}>
                        Submit Order
                  </button>
                </Link>
            </div>
        );
}

export default RightCol;