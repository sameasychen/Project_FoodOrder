import React from 'react';

import FoodList from '../FoodList';
import RightCol from '../RightCol';


const Vegies = props => {

    const vegies = props.dishes.filter((data) => {
        return data.properties.Category === "Vegies"
    })

    return (

        <div className="Content row mx-auto contentwidth py-3">
            <div className="row mx-0 col-lg-8">

                <FoodList dishes={vegies} onaddDish={props.onaddDish} />

            </div>
            {/* <div className="midLine"></div> */}
            
                <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish}/>

        </div>
    );
}

export default Vegies;