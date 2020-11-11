import React from 'react';

import RightCol from './RightCol';
import MenuItem from './MenuItem';


const MainMenu = props => {

    return (

        <div className="Content row mx-auto contentwidth">
            <div className="row col-md-8 mx-auto">

                {/* <ol className="row mx-auto col-lg-8"> */}

                    {props.menu.map(data => <MenuItem  key={data.categoryID} menu={data} onaddDish={props.onaddDish} />)}

                {/* </ol> */}

            </div>
            {/* <div className="midLine"></div> */}


            <RightCol orders={props.orders} onDelete={props.onDelete} onSubmit={props.onSubmit} onaddDish={props.onaddDish} onminusDish={props.onminusDish}/>


        </div>
    );
}

export default MainMenu;