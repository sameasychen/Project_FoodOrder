import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


import Logo from '../Image/Logo.svg'

const Header = props => {

    return (

        <div className="Header">
            <div className="row">
                <div className="col-sm-2">
                    <img className="m-2" src={Logo} width="100" alt="Restaurant Logo" />
                </div>
                <div className="col-sm-8"></div>

                <div className="nav col-sm-2">

                    <Link to='/order' className="mx-auto">
                        <FontAwesomeIcon icon={faCartPlus} color="grey" size="2x" alt="Shopping Cart"></FontAwesomeIcon>
                    </Link>

                </div>

            </div>
            <hr />


        </div>
    );
}

export default Header;