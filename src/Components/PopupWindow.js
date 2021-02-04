import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWindow.css'


const PopupWindow = (props) => {


    const onFailClick = () => {
        props.hidePop();
    }

    const successNotes = (
        <div
            className='popContainer w-80 mx-auto mt-3'
        >
            <h4
                className='text-center'
            >Order Successful!</h4>
            <ul
                className='my-4'
            >
                <li>An email has been sent to your email address, please check to confirm your order.</li>
                <li>Your order will be ready at your choosed pickup time. (You can confirm our address at our contact page)</li>
                <li>If you have any questions regards to your order, please call our number at 123-456-7890</li>
            </ul>
            <Link to='/' >
                <button
                    className='popBtn btn btn-primary'
                    onClick={() => onFailClick()}
                >OK</button>
            </Link>
        </div>
    );

    const failNotes = (
        <div
            className='failContainer'
        >
            <p
                className='text-center h5 mb-3'
            >Order sent failed, please try again later.</p>
            <button
                className='popBtn btn btn-primary'
                onClick={() => onFailClick()}
            >OK</button>
        </div>

    )

    return (

        <div
            className='popup'
        >
            {props.orderSuccess ?
                successNotes :
                failNotes

            }
        </div>
    );
}

export default PopupWindow;