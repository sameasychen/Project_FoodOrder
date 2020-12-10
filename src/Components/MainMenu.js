import React from 'react';

import RightCol from './RightCol';
import MenuItem from './MenuItem';


const MainMenu = props => {

    return (

        <div className="Content row mx-auto contentwidth">
            <div className="row col-md-8 mx-auto">

                {props.menu.map(data => <MenuItem key={data.categoryID} menu={data} onaddDish={props.onaddDish} />)}

            </div>

            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish} />


        </div>
    );
}

export default MainMenu;