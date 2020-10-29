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

        const menu = this.props.menu

        return (
            <div className="dish inline-block">
                <Link className="dishLink" to={menuPath} >

                    <img
                        className="picImg rounded mx-auto d-block"
                        src={menu.foodPic}
                        alt={menu.categoryName}
                        height='200' />

                    <p className="picText text-center">
                        {menu.categoryName}
                    </p>



                </Link>
            </div >
        );
    }
}

export default MenuItem;