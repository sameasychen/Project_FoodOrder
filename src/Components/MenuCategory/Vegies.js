import React from 'react';

import RightCol from '../RightCol';
import FoodItem from '../FoodItem';


const Vegies = props => {

    const vegies = props.dishes.filter((data) => {
        return data.properties.Category === "Vegies"
    })

    return (

        <div className="Content row mx-auto contentwidth">
            <div className="row col-md-8 mx-auto">

                {vegies.map(data => <FoodItem  key={data.foodID} dish={data} onaddDish={props.onaddDish} />)}
            </div>

            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} />

        </div>
    );
}

export default Vegies;