import React from 'react';
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';


import Logo from '../Image/Logo.svg'
import ShoppingCart from '../Image/ShoppingCart.svg'


const Header = props => {

    return (

        <div className="Header">
            <div className="row">
                <div className="col-sm-1">
                    <img src={Logo} width="100" alt="Restaurant Logo" />
                </div>
                <div className="col-sm-9">Divider</div>

                <div className="col-sm-2">

                    <FontAwesomeIcon icon={faCartPlus} color="grey" size="2x" spin/>

                {/* <img scr={ShoppingCart} alt="Shopping Cart"></img> */}
                    {/* <Link to='/order'>

                        <img scr={ShoppingCart} alt="Shopping Cart"></img>

                    </Link> */}

                </div>


            </div>
            <hr />


        </div>
    );
}

export default Header;