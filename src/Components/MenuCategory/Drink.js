import React from 'react';

import RightCol from '../RightCol';
import FoodItem from '../FoodItem';



const Drink = props => {

    const drinks = props.dishes.filter((data) => {
        return data.properties.Category === "Drink"
    })

    return (

        <div className="Content row mx-auto contentwidth">
            <div className="row col-md-8 mx-auto">

                {drinks.map(data => <FoodItem  key={data.foodID} dish={data} onaddDish={props.onaddDish} />)}

            </div>

            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} />



        </div>
    );
}

export default Drink;