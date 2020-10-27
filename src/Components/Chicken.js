import React from 'react';

import FoodList from './FoodList';
import RightCol from './RightCol';


const Chicken = props => {

    const chickens = props.dishes.filter((data) => {
        return data.properties.Category == "Chicken"
    })

    return (

        <div className="row">
            <div className="col-md-8">

                <FoodList dishes={chickens} onaddDish={props.onaddDish} />

            </div>
            <div className="midLine"></div>
            <div className="col-md-3">

                <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit}/>

            </div>

        </div>
    );
}

export default Chicken;