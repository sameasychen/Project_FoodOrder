import React from 'react';

import FoodList from '../FoodList';
import RightCol from '../RightCol';


const Drink = props => {

    const drinks = props.dishes.filter((data) => {
        return data.properties.Category === "Drink"
    })

    return (

        <div className="Content row mx-auto contentwidth py-3">
            <div className="row col-md-8 mx-auto">

                <FoodList dishes={drinks} onaddDish={props.onaddDish} />

            </div>
            {/* <div className="midLine"></div> */}
           

                <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish}/>

            

        </div>
    );
}

export default Drink;