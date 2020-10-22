
import React from 'react';
import FoodItem from './FoodItem';

const FoodList = props => {

        return (

            <div className="App">

                <ol className="row">

                    {props.dishes.map(data => <FoodItem className="col-lg-3" key={data.foodID} dish={data} onaddDish={props.onaddDish} />)}

                </ol>
            </div>
        );
}

export default FoodList;