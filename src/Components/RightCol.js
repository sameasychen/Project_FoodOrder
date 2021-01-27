import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import OrderList from './OrderList';



const RightCol = (props) => {

    let orderedFood = props.orders.filter((data) => {
        return data.properties.numOfitem > 0
    })

    let submitLink = () => {

        if (orderedFood[0]) {
            props.onSubmit();
        } else {

            alert("Your order is empty");
        }
    }


    let content;

    if (props.isOrderPage) {
        content = <div></div>
    }
    else {


        if (orderedFood[0]) {
            content =
                <Link className="submitLink" id="submit" to='/order' >
                    <button
                        className="btn btn-sm btn-success btn-block my-2"
                        onClick={submitLink}>
                        Submit Order
                    </button>

                </Link>
        } else {
            content =
                <div className="submitLink" id="submit" >
                    <button
                        className="btn btn-sm btn-success btn-block my-2"
                        onClick={submitLink}>
                        Submit Order
                    </button>

                    {content}
                </div>
        }
    }

    return (

        <div className="rightCol col-md-4">

            <OrderList orders={props.orders} onDelete={props.onDelete} onaddDish={props.onaddDish} onminusDish={props.onminusDish} taxes={props.taxes} totalPrice={props.totalPrice} />



            {content}


            {/* <Link className="submitLink" id="submit" to='/order' >
                <button
                    className="btn btn-sm btn-success btn-block my-2"
                    onClick={this.submitLink}>
                    Submit Order
                   </button>

            </Link>

            <div className="submitLink" id="submit" >
                <button
                    className="btn btn-sm btn-success btn-block my-2"
                    onClick={this.submitLink}>
                    Submit Order
                   </button>

                {content}
            </div> */}




        </div>
    );

}

export default RightCol;