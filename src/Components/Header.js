import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


import Logo from '../Image/Logo.jpg'

const Header = props => {

    let dataReload = document.querySelectorAll("[data-reload]")

    //console.log(dataReload)

    let language = {
        eng: {
            welcome: "Welcome everyone"
        },
        fre: {
            welcome: "Bienvenue"
        }
    }


    let Parag = document.querySelector(".hi")
    if (window.location.hash) {
        if (window.location.hash === "#fre") {
            Parag.textContent = language.fre.welcome;
        }
    }

    // for(let i=0; i<= dataReload.length; i++){
    //     dataReload[i].onclick = ()=>{
    //         window.location.reload()
    //     }
    // }

    return (

        <div className="Header border">

            <div className="contentwidth mx-auto row">
                <Link className="LogoElement" to="./" >
                    <img className="m-2 rounded" src={Logo} width="250" alt="Restaurant Logo" />
                </Link>
            </div>
            <div className="bg-dark">
                <div className="Nav contentwidth mx-auto">
                    <div className="d-flex justify-content-end align-items-center">
                        <Link className="NavLink text-light text-center p-2" to='/'>
                            Menu
                        </Link>
                        <Link className="NavLink text-light text-center p-2" to='/contactus'>
                            Contact Us
                        </Link>
                        <Link className="NavLink text-center p-2" to='/order'>
                            <FontAwesomeIcon icon={faCartPlus} color="white" size="2x" alt="Shopping Cart"></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;