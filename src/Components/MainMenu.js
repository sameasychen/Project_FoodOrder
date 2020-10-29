import React from 'react';
import { Route, Link } from 'react-router-dom'

import RightCol from './RightCol';
import MenuItem from './MenuItem';


const MainMenu = props => {

    return (

        <div className="Content row mx-auto contentwidth py-3">
            <div className="col-lg-9 container-fluid">

                <ol className="row mx-auto container-fluid">

                    {props.menu.map(data => <MenuItem className="col-lg-3" key={data.categoryID} menu={data} onaddDish={props.onaddDish} />)}

                </ol>

            </div>
            <div className="midLine"></div>


            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} />


        </div>
    );
}

export default MainMenu;