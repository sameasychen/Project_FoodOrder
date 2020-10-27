import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'



class MenuItem extends Component {


    constructor(props) {
        super(props);

        this.state = {
            numOfitem: ''

        };

    }

    render() {

        const menuPath = `/${this.props.menu.categoryName}`

        return (
            <div className="dish inline-block mt=5">
                <Link id="submit" to= {menuPath} >
                <div className="dishPic my-5">
                    <img
                        className="rounded mx-auto d-block"
                        src={this.props.menu.foodPic}
                        alt={this.props.menu.categoryName}
                        height='200' />
                </div>
                <p className="text-center">{this.props.menu.categoryName}</p>
                </Link>
            </div >
        );
    }
}

export default MenuItem;