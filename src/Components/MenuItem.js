import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'



class MenuItem extends Component {


    constructor(props) {
        super(props);

    }

    render() {

        const menuPath = `/${this.props.menu.categoryName}`

        const menu = this.props.menu

        return (
            <div className="col-sm-4">
            <div className="dish inline-block">
                <Link className="dishLink" to={menuPath} >

                    <img
                        className="picImg rounded mx-auto d-block"
                        src={menu.foodPic}
                        alt={menu.categoryName}
                        height='200' />

                    <p className="picText text-center mb-0">
                        {menu.categoryName}
                    </p>



                </Link>
            </div >
            </div>
        );
    }
}

export default MenuItem;