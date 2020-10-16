import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


import Logo from '../Image/Logo.svg'

const Header = props => {

    let dataReload = document.querySelectorAll("[data-reload]")

    console.log(dataReload)

    let language = {
        eng: {
            welcome: "Welcome everyone"
        },
        fre:{
            welcome: "Bienvenue"
        }
    }

    
    let Parag = document.querySelector(".hi")
    if(window.location.hash){
        if(window.location.hash==="#fre"){
            Parag.textContent= language.fre.welcome;
        }
    }

    // for(let i=0; i<= dataReload.length; i++){
    //     dataReload[i].onclick = ()=>{
    //         window.location.reload()
    //     }
    // }

    return (

        <div className="Header">
            <div className="row">
                <div className="col-sm-2">
                    <img className="m-2" src={Logo} width="100" alt="Restaurant Logo" />
                </div>
                <div className="col-sm-8">
                    <a href="#eng" data-reload>English</a>
                    <a href="#fre" data-reload>French</a>
                    <p id="hi">Welcome everyone!</p>

                </div>

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