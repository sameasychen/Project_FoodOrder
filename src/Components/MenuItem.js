import React from 'react';
import { Link } from 'react-router-dom'



const MenuItem = props => {

    const menuPath = `/${props.menu.categoryName}`

    const menu = props.menu

    return (
        <div className="menuItem col-sm-4 col-6">
            <div className="dish inline-block mx-auto">
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

export default MenuItem;