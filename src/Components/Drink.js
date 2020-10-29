import React from 'react';

import FoodList from './FoodList';
import RightCol from './RightCol';


const Drink = props => {

    const drinks = props.dishes.filter((data) => {
        return data.properties.Category == "Drink"
    })

    return (

        <div className="Content row mx-auto contentwidth py-3">
            <div className="col-lg-9 container-fluid">

                <FoodList dishes={drinks} onaddDish={props.onaddDish} />

            </div>
            <div className="midLine"></div>
           

                <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit}/>

            

        </div>
    );
}

export default Drink;