import React from 'react';

import OrderInfo from './OrderInfo';
import RightCol from './RightCol';



const Order = props => {

    let isOrderPage =true;

    return (

        <div className="Content row mx-auto contentwidth py-3">
            
            <OrderInfo theorderID={props.theorderID} sendOrder={props.sendOrder}/>


            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} isOrderPage={isOrderPage}/>


        </div>
    );

}

export default Order;