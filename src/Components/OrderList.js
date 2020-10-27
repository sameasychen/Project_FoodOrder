import React, { Component } from 'react';

class OrderList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            numOfitem: ''

        };

        this.deleteFood = this.deleteFood.bind(this);
       
    }

    //Delete Food
    deleteFood = (foodID) => {
        this.props.onDelete(foodID)
    }

    render() {

        //Calculate Total Price
        let orderedFood = this.props.orders.filter((data) => {
            return data.properties.numOfitem > 0
        })

        let totalPrice = 0

        for (let i = 0; i < orderedFood.length; i++) {

            let eachPrice = orderedFood[i].properties.numOfitem * orderedFood[i].properties.foodPrice
            totalPrice += eachPrice;
        }

        return (

            <div className="App">

                <h3 className="font-weight-bold">Your order</h3>
                <br></br>
                <ol className="mt-3">

                    {orderedFood.map(data =>
                        <li key={data.foodID}>
                            <span className="px-3">
                            {data.properties.foodName}
                            </span>
                            <span className="px-3">
                                {data.properties.foodPrice} X {data.properties.numOfitem}
                            </span>
                            <button className="del" onClick={() => this.deleteFood(data.foodID)}>
                                X</button>
                        </li>
                    )}

                </ol>
                <p className="font-weight-bold">Total Price: {totalPrice}</p>
            </div>
        )
    }

}

export default OrderList;