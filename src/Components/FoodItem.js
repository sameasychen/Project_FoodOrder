import React, { Component } from 'react';

class FoodItem extends Component {


    constructor(props) {
        super(props);

        this.state = {
            numOfitem: ''

        };

        this.addButton = this.addButton.bind(this);

    }



    //Add Button
    addButton = (IDoffood) => {
        this.props.onaddDish(IDoffood)

    }

    render() {

        return (
            <div className="col-sm-4">

                <div className="dish inline-block mt=5">
                    <div className="dishPic">
                        <img
                            className="picImg rounded mx-auto d-block"
                            src={this.props.dish.properties.foodPic}
                            alt={this.props.dish.properties.foodName}
                            height='150' />
                    </div>

                    <div className="dishName text-center">{this.props.dish.properties.foodName}</div>

                    <tr className="row">
                        <td className="dishPrice text-success text-center col-7">
                            ${this.props.dish.properties.foodPrice}
                        </td>
                        <td className="col-5">
                            <button className="btn btn-sm btn-success" onClick={() => this.addButton(this.props.dish.foodID)}>Add</button>
                        </td>
                    </tr>
                </div >
            </div>
        );
    }
}

export default FoodItem;