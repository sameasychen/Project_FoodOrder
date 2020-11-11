import React from 'react';

import OrderInfo from './OrderInfo';
import RightCol from './RightCol';



const Order = props => {



    return (

        <div className="Content row mx-auto contentwidth py-3">
            
            <OrderInfo theorderID={props.theorderID} />


            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} />


        </div>
    );

}

export default Order;