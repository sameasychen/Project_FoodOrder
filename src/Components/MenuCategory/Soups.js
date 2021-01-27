import React from 'react';

import RightCol from '../RightCol';
import FoodItem from '../FoodItem';


const Soups = props => {

    const soups = props.dishes.filter((data) => {
        return data.properties.Category === "Soups"
    })

    return (

        <div className="Content row mx-auto contentwidth">
            <div className="row col-md-8 mx-auto">

                {soups.map(data => <FoodItem  key={data.foodID} dish={data} onaddDish={props.onaddDish} />)}

            </div>

            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} taxes={props.taxes} totalPrice={props.totalPrice}/>

        </div>
    );
}

export default Soups;