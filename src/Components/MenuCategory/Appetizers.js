import React from 'react';

import RightCol from '../RightCol';
import FoodItem from '../FoodItem';



const Appetizers = props => {

    const appetizers = props.dishes.filter((data) => {
        return data.properties.Category === "Appetizers"
    })

    return (

        <div className="Content row mx-auto contentwidth">
            <div className="row col-md-8 mx-auto">

                {appetizers.map(data => <FoodItem  key={data.foodID} dish={data} onaddDish={props.onaddDish} />)}

            </div>

            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} />

        </div>
    );
}

export default Appetizers;