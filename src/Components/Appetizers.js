import React from 'react';

import FoodList from './FoodList';
import RightCol from './RightCol';


const Appetizers = props => {

    const appetizers = props.dishes.filter((data) => {
        return data.properties.Category == "Appetizers"
    })

    return (

        <div className="row">
            <div className="col-md-8">

                <FoodList dishes={appetizers} onaddDish={props.onaddDish} />

            </div>
            <div className="midLine"></div>
            <div className="col-md-3">

                <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit}/>

            </div>

        </div>
    );
}

export default Appetizers;