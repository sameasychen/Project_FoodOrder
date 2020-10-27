import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css'

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainMenu from './Components/MainMenu';
import Appetizers from './Components/Appetizers';
import Chicken from './Components/Chicken';
import Drink from './Components/Drink';
import Order from './Components/Order';
import foodUrl from './FoodData.json';
import MenuCategory from './MenuCategory.json';
import OrderList from './Components/OrderList';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      dishes: [],
      orders: [],
      orderID: '',
      menu: []

    };

    this.addDish = this.addDish.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.refreshAllDishes = this.refreshAllDishes.bind(this);

  }

  // Load Data
  componentDidMount() {

    this.refreshAllDishes()
  }

  refreshAllDishes = () => {

    let loadDish = new Promise((resolve, reject) => (
      setTimeout(() => (
        resolve("success")
      ))
    ))

    loadDish.then(

      this.setState(() => ({
        dishes: foodUrl
      }))

    )
      .then(

        this.setState(() => ({
          orders: foodUrl
        }))
      )
      .then(

        this.setState(() => ({
          menu: MenuCategory
        }))
      )

  }

  // Add Food

  addDish = (inputNum, foodID) => {

    if (inputNum === 0 || inputNum === '') {
      return alert("Please enter quantity!")
    }
    // else if (totalNum > 0) {

    //   return alert("Can not order more than one item")

    // }
    else {

      let newOrders = this.state.dishes.slice(0);

      newOrders.map(order => {
        if (order.foodID === foodID) {
          if (!order.properties.numOfitem) {
            order.properties.numOfitem = 0
          }
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

    console.log(this.state.dishes)

    console.log(this.state.orders)

    console.log(this.state.menu)


    return (
      <div className="App">

        <Route exact path='/' render={() => (
          <div>
            <Header />
            <MainMenu menu={this.state.menu} orders={this.state.orders} onaddDish={this.addDish} />
            <Footer />
          </div>
        )} />

        <Route exact path='/Appetizers' render={() => (
          <div>
            <Header />
            <Appetizers dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} />
            <Footer />
          </div>
        )} />

        <Route exact path='/Chicken' render={() => (
          <div>
            <Header />
            <Chicken dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} />
            <Footer />
          </div>
        )} />

        <Route exact path='/Drink' render={() => (
          <div>
            <Header />
            <Drink dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} />
            <Footer />
          </div>
        )} />

        <Route path='/order' render={() => (
          <div>
            <Header />
            <Order theorderID={this.state.orderID} />
            <OrderList orders={this.state.orders} onDelete={this.onDelete} />
            <Footer />
          </div>
        )} />

      </div>
    );
  }
}

export default App;