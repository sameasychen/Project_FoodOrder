import React from 'react';
import { Route, Link } from 'react-router-dom'

import OrderList from './OrderList';
import FoodList from './FoodList';


const Content = props => {

    return (
        
        <div className="row">
            <div className="col-md-8">

                <FoodList dishes={props.dishes} onaddDish={props.onaddDish} />

            </div>
            <div className="midLine"></div>
            <div className="col-md-3">

                <OrderList orders={props.orders} onDelete={props.onDelete} />

                <Link id="submit" to='/order' >
                    <button
                        className="mx-auto btn btn-success"
                        onClick={() => this.onSubmit()}>
                        Submit Order
                  </button>
                </Link>
            </div>
        </div>
    );
}

export default Content;