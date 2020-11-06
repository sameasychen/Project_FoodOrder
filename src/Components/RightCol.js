import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import OrderList from './OrderList';



class RightCol extends Component {


    constructor(props) {
        super(props);

        this.submitLink = this.submitLink.bind(this);

    }

    submitLink=()=>{

        let orderedFood = this.props.orders.filter((data) => {
            return data.properties.numOfitem > 0
        })

        if(orderedFood[0]){
            this.props.onSubmit();
        }
    }

    render() {

        let props = this.props;
        return (

            <div className="rightCol col-md-4">

                <OrderList orders={props.orders} onDelete={props.onDelete} onaddDish={props.onaddDish}  onminusDish={props.onminusDish}/>

                <Link id="submit" to='/order' >
                    <button
                        className="btn btn-sm btn-success btn-block my-2"
                        onClick={this.submitLink}>
                        Submit Order
                  </button>
                </Link>
            </div>
        );
    }
}

export default RightCol;