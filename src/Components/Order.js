import React from 'react';

import OrderInfo from './OrderInfo';
import RightCol from './RightCol';
import PopupWindow from './PopupWindow';


const Order = props => {

    let isOrderPage = true;

    return (

        <div className="Content orderContent row mx-auto contentwidth py-3">

            <OrderInfo theorderID={props.theorderID} sendOrder={props.sendOrder} />


            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} isOrderPage={isOrderPage} taxes={props.taxes} totalPrice={props.totalPrice} />

            {
               props.popShow?              <PopupWindow orderSuccess={props.orderSuccess} hidePop={props.hidePop}/>
               :''
            }

        </div>
    );

}

export default Order;