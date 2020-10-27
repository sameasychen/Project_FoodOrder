import React from 'react';
import { Route, Link } from 'react-router-dom'

import RightCol from './RightCol';
import MenuItem from './MenuItem';


const MainMenu = props => {

    return (

        <div className="row">
            <div className="col-md-8">

                <ol className="row">

                    {props.menu.map(data => <MenuItem className="col-lg-3" key={data.categoryID} menu={data} onaddDish={props.onaddDish} />)}

                </ol>

            </div>
            <div className="midLine"></div>
            <div className="col-md-3">

                <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit}/>

            </div>
        </div>
    );
}

export default MainMenu;