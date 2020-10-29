
import React from 'react';
import FoodItem from './FoodItem';

const FoodList = props => {

        return (

            

                <ol className="row mx-auto container-fluid">

                    {props.dishes.map(data => <FoodItem className="col-lg-3" key={data.foodID} dish={data} onaddDish={props.onaddDish} />)}

                </ol>
            
        );
}

export default FoodList;