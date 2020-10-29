import React from 'react';
import { Route, Link } from 'react-router-dom'

import GoogleMap from './GoogleMap';


const MainMenu = props => {

    return (

        <div className="contactus mx-auto row my-5">
            <div className="col-md-6">

                <p>ADDRESS</p>
                <p>3795 Verdun St, Montreal, QC</p>
                <p>Tel: 514-508-8868</p>

                <p>Hours of Operation:</p>

                <div className="hours mb-3 px-5">
                    <tr className="row">
                        <td className="col">Monday</td>
                        <td className="col  text-right"> 09:00 AM - 10:30 PM</td>
                    </tr>
                    <tr className="row">
                        <td className="col">Tuesday</td>
                        <td className="col  text-right"> 03:00 PM - 10:30 PM</td>
                    </tr>
                    <tr className="row">
                        <td className="col">Wednesday</td>
                        <td className="col  text-right"> 09:00 AM - 10:30 PM</td>
                    </tr>
                    <tr className="row">
                        <td className="col">Thursday</td>
                        <td className="col  text-right"> 09:00 AM - 10:30 PM</td>
                    </tr>
                    <tr className="row">
                        <td className="col">Friday</td>
                        <td className="col  text-right"> 09:00 AM - 10:30 PM</td>
                    </tr>
                    <tr className="row">
                        <td className="col">Saturday</td>
                        <td className="col  text-right"> 11:00 AM - 10:30 PM</td>
                    </tr>
                    <tr className="row">
                        <td className="col">Sunday</td>
                        <td className="col  text-right"> 11:00 AM - 10:30 PM</td>
                    </tr>
                </div>

            </div>
            <div className="midLine"></div>
            <div className="col-md-5 my-3">

                <GoogleMap/>
                

            </div>
        </div>
    );
}

export default MainMenu;