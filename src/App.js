import React, { Component } from 'react';
import { Route,Link  } from 'react-router-dom'
// import './App.css'

import Header from './Components/Header';
import FoodList from './Components/FoodList';
import Order from './Components/Order';
import foodUrl from './FoodData.json';
import OrderList from './Components/OrderList';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      dishes: [],
      orders: [],
      orderID: ''

    };

    this.addDish = this.addDish.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // Load Data
  componentDidMount() {

     this.setState(() => ({
      dishes: foodUrl
    }))

    let newDishes = this.state.dishes.slice(0);
    this.setState(() => ({
      orders: newDishes
    }))

  }

  // Add Food

  addDish = (inputNum, foodID) => {

    let totalItems = this.state.orders.filter((order) => {
      return order.properties.numOfitem !== 0
    })
    //console.log(totalItems)
    let totalNum = totalItems.length
    //console.log(totalItems.length)


    if (inputNum === 0 || inputNum === '') {
      return alert("Please enter quantity!")
    }
    else if (totalNum > 0) {

      return alert("Can not order more than one item")

    } else {

      let newOrders = this.state.orders.slice(0);

      newOrders.map(order => {
        if (order.foodID === foodID) {
          let increment = parseInt(inputNum)
          order.properties.numOfitem += increment
        }
      })

      this.setState(() => ({
        orders: newOrders

      }))
      //console.log(this.state.orders)
    }
  }


  // Submit Order
  onSubmit = () => {

    let max = 100000000;
    let min = 10000000;
    let randomOrderID = Math.floor(Math.random() * (max - min + 1)) + min;

    this.setState(() => ({

      orderID: randomOrderID,

    }))
  }

  //Delete Order
  onDelete = (foodID) => {

    let newOrders = this.state.orders.slice(0);

    newOrders.map(order => {
      if (order.foodID === foodID) {

        order.properties.numOfitem = 0
      }
    })

    this.setState(() => ({

      orders: newOrders,

    }))
  }

  render() {

    return (
      <div className="App">

        <Route exact path='/' render={() => (
          <div>
            <Header/>
            <div className="row">
              <div className="col-md-8">

                <FoodList dishes={this.state.dishes} onaddDish={this.addDish} />

              </div>
              <div className="midLine"></div>
              <div className="col-md-3">

                <OrderList dishes={this.state.dishes} onDelete={this.onDelete} />

                <Link id="submit" to='/order' >
                  <button
                    className="mx-auto btn btn-success"
                    onClick={() => this.onSubmit()}>
                    Submit Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )} />

        <Route path='/order' render={() => (
          <div>
            <Order theorderID={this.state.orderID} />
            <OrderList dishes={this.state.dishes} onDelete={this.onDelete} />
          </div>
        )} />

      </div>
    );
  }
}

export default App;