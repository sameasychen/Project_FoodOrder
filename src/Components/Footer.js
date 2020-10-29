import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Header = props => {
    let startCount =[0,1,2,3,4];
    return (

        <div className="bg-dark">

            <div className="contentwidth row text-light mx-auto py-4">
                <div className="col-md-5">
                    <p>WELCOME TO OUR RESTAURANT</p>

                    {
                    startCount.map((index) =><FontAwesomeIcon key={index} icon={faStar} color="gold" size="1x" alt="Rate Star" />)

                    }

                    <span> 22 reviews</span>
                    <br/>

                    <p>Serving: Chinese Cuisine</p>

                </div>
                <div className="col-md-4">
                    <p>NAVIGATION</p>
                    <div>
                        <Link to='/'>
                            Menu
                    </Link>
                    </div>
                    <div>
                        <Link to='/order'>
                            Location
                    </Link>
                    </div>
                    <div>
                        <Link to='/contactus'>
                            Contact Us
                    </Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <p>ADDRESS</p>
                    <p>3795 Verdun St, Montreal, QC</p>
                    <p>Tel: 514-508-8868</p>

                </div>

            </div>
            <p className="text-center text-muted my-0"><small>Copyright @2020, all rights reserved</small></p>

        </div>
    );
}

export default Header;