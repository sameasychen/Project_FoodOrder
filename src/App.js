import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css'

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainMenu from './Components/MainMenu';
import Appetizers from './Components/MenuCategory/Appetizers';
import Chicken from './Components/MenuCategory/Chicken';
import Drink from './Components/MenuCategory/Drink';
import Soups from './Components/MenuCategory/Soups';
import Rice from './Components/MenuCategory/Rice';
import Vegies from './Components/MenuCategory/Vegies';
import Order from './Components/Order';
import ContactUs from './Components/ContactUs';

import foodUrl from './FoodData.json';
import { MenuCategory } from './MenuCategory';

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
    this.minusDish = this.minusDish.bind(this);
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

  addDish = (foodID) => {

    let newOrders = this.state.orders.slice(0);

    newOrders.map(order => {
      if (order.foodID === foodID) {
        if (!order.properties.numOfitem) {
          order.properties.numOfitem = 0
        }

        order.properties.numOfitem += 1
      }
      return order
    })

    this.setState(() => ({
      orders: newOrders

    }))

  }

  // Minus Food

  minusDish = (foodID) => {

    let newOrders = this.state.orders.slice(0);

    newOrders.map(order => {
      if (order.foodID === foodID) {
        // if (!order.properties.numOfitem) {
        //   order.properties.numOfitem = 0
        // }

        order.properties.numOfitem -= 1
      }
      return order
    })

    this.setState(() => ({
      orders: newOrders

    }))

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
      return order
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
            <MainMenu menu={this.state.menu} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish}/>
            <Footer />
          </div>
        )} />

        <Route exact path='/Appetizers' render={() => (
          <div>
            <Header />
            <Appetizers dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish} />
            <Footer />
          </div>
        )} />

        <Route exact path='/Chicken' render={() => (
          <div>
            <Header />
            <Chicken dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish}/>
            <Footer />
          </div>
        )} />

        <Route exact path='/Vegies' render={() => (
          <div>
            <Header />
            <Vegies dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish}/>
            <Footer />
          </div>
        )} />

        <Route exact path='/Rice' render={() => (
          <div>
            <Header />
            <Rice dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish}/>
            <Footer />
          </div>
        )} />

        <Route exact path='/Soups' render={() => (
          <div>
            <Header />
            <Soups dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish}/>
            <Footer />
          </div>
        )} />

        <Route exact path='/Drink' render={() => (
          <div>
            <Header />
            <Drink dishes={this.state.dishes} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish}/>
            <Footer />
          </div>
        )} />

        <Route path='/order' render={() => (
          <div>
            <Header />
            <Order theorderID={this.state.orderID} orders={this.state.orders} onaddDish={this.addDish} onDelete={this.onDelete} onSubmit={this.onSubmit} onminusDish={this.minusDish}/>
            <Footer />
          </div>
        )} />

        <Route path='/contactus' render={() => (
          <div>
            <Header />
            <ContactUs />
            <Footer />
          </div>
        )} />

      </div>
    );
  }
}

export default App;