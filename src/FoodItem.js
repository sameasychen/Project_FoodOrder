import React, { Component } from 'react';

class FoodItem extends Component {


    constructor(props) {
        super(props);

        this.state = {
            numOfitem: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.addButton = this.addButton.bind(this);

    }

    //Input Handler
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    //Add Button
    addButton = (foodNum, IDoffood) => {
        this.props.onaddDish(foodNum, IDoffood)
        this.setState(() => ({

            numOfitem: '',
      
          }))

    }

    render() {

        return (
            <div className="dish inline-block mt=5">
                <div className="dishPic my-5">
                <img 
                className="rounded mx-auto d-block"
                 src={this.props.dish.properties.foodPic} 
                 alt={this.props.dish.properties.foodName} 
                 height='150' />
                 </div>
                <p className="text-center">{this.props.dish.properties.foodName}</p>
                <p className="text-center">${this.props.dish.properties.foodPrice}</p>

                <div className="row">
                    <div className="col-7">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="0"
                            name="numOfitem"
                            value={this.state.numOfitem}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col5">
                        <button className="btn btn-success" onClick={() => this.addButton(this.state.numOfitem, this.props.dish.foodID)}>Add</button>
                    </div>
                </div>

            </div >
        );
    }
}

export default FoodItem;