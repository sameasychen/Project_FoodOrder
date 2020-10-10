import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


import FoodList from './FoodList';
import Order from './Order';
import foodUrl from './FoodData.xml';
import OrderList from './OrderList';



import './App.css';

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

    document.addEventListener('DOMContentLoaded', () => {
      let url = foodUrl;
      fetch(url)
        .then(response => response.text())
        .then(data => {
          let parser = new DOMParser();
          let xml = parser.parseFromString(data, "application/xml");

          let dishes = xml.getElementsByTagName('dish');
          let theFoods = [];


          for (let i = 0; i < dishes.length; i++) {

            let theID = dishes[i].getAttribute("id");
            let thePic = dishes[i].getElementsByTagName("foodPic")[0].textContent;
            let theName = dishes[i].getElementsByTagName("foodName")[0].textContent;
            let thePrice = dishes[i].getElementsByTagName("foodPrice")[0].textContent;

            let theProps = {}

            theProps.foodPic = thePic;
            theProps.foodName = theName;
            theProps.foodPrice = thePrice;
            theProps.numOfitem = 0;

            let theFood = {}
            theFood.foodID = theID;
            theFood.properties = theProps;

            theFoods.push(theFood)

          }

          this.setState(() => ({
            dishes: theFoods

          }))
          //console.log(this.state.dishes)

          let newDishes = this.state.dishes.slice(0);
          this.setState(() => ({
            orders: newDishes
          }))

        })
    })
  }

  // Add Food

  addDish = (inputNum, foodID) => {

    let totalItems = this.state.orders.filter((order) => {
      return order.properties.numOfitem !== 0
    })
    //console.log(totalItems)
    let totalNum = totalItems.length
    //console.log(totalItems.length)


    if(inputNum === 0 || inputNum === ''){
      return alert("Please enter quantity!")
    }
    else if (totalNum > 0 ) {

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
  onDelete =(foodID)=>{

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
            <h1>Food Order</h1>
            <div className="row">
              <div className="col-md-8">

                <FoodList dishes={this.state.dishes} onaddDish={this.addDish} />

              </div>
              <div className="midLine"></div>
              <div className="col-md-3">

                <OrderList dishes={this.state.dishes} onDelete={this.onDelete}/>

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
        <OrderList dishes={this.state.dishes} onDelete={this.onDelete}/>
        </div>
        )} />

      </div>
    );
  }
}

export default App;