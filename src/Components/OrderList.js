import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



class OrderList extends Component {


    constructor(props) {
        super(props);

        this.deleteFood = this.deleteFood.bind(this);
        this.addFood = this.addFood.bind(this);
        this.minusFood = this.minusFood.bind(this);


    }

    //Add Food
    addFood = (foodID) => {
        this.props.onaddDish(foodID)
    }

    // Minus Food
    minusFood = (foodID) => {
        this.props.onminusDish(foodID)
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

        let beforeTaxTotal = 0

        for (let i = 0; i < orderedFood.length; i++) {

            let eachPrice = orderedFood[i].properties.numOfitem * orderedFood[i].properties.foodPrice
            beforeTaxTotal += eachPrice;
        }

        let taxesTemp = beforeTaxTotal * 0.13;

        let taxes = taxesTemp.toFixed(2);

        let afterTaxTotalTemp = beforeTaxTotal + taxesTemp

        let totalPrice = afterTaxTotalTemp.toFixed(2);

        return (

            <div className="maxwidth px-4 mx-auto">

                <h4 className="font-weight-bold text-center border-bottom">Your order</h4>

                <ul className="orderUl px-0 mt-3">

                    {orderedFood.map(data =>

                        <li className="row" key={data.foodID}>
                            <button className="addDish col-1 px-0" onClick={() => this.addFood(data.foodID)}>
                                <FontAwesomeIcon 
                                icon={faPlusCircle} 
                                size="sm" 
                                alt="Add One"
                                className="align-text-top"
                                ></FontAwesomeIcon>
                            </button>

                            <button className="minusDish col-1 px-0" onClick={() => this.minusFood(data.foodID)}>
                                <FontAwesomeIcon 
                                icon={faMinusCircle} 
                                size="sm" 
                                alt="Minus One"
                                className="align-text-top"
                                ></FontAwesomeIcon>
                            </button>

                            <span className="col-6 px-0 font-weight-bold">
                                {data.properties.foodName}

                            </span>

                            <span className="px-0 col-3 text-right font-weight-bold">
                                {data.properties.foodPrice} X {data.properties.numOfitem}
                            </span>

                            <button className="del col-1 px-0" onClick={() => this.deleteFood(data.foodID)}>
                                <FontAwesomeIcon 
                                icon={faTrashAlt} 
                                size="sm" 
                                alt="Minus One" className="align-text-top">
                                </FontAwesomeIcon>
                            </button>
                        </li>

                    )}

                </ul>
                <table className="maxwidth">
                    <tbody>
                        <tr className="row">
                            <td className="col">Taxes:</td>
                            <td className="col text-right font-weight-bold">$ {taxes}</td>

                        </tr>
                        <tr className="row">
                            <td className="col">Total Price:</td>
                            <td className="col text-right font-weight-bold">$ {totalPrice}</td>

                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

}

export default OrderList;