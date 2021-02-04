import React, { Component } from 'react';
// import TimePicker from 'react-times';

import 'react-times/css/classic/default.css';

const initialState = {
    name: "",
    email: "",
    phone: "",
    message: ""
}

class OrderInfo extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            utensil: false,
            pickupTime: "",
            nameError: "",
            emailError: "",
            phoneError: "",
            messageError: "",
            timeObj: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {

        this.setPickUpTime()

    }


    validate() {

        this.setState({ nameError: "", phoneError: "", messageError: "" })

        if (!this.state.name) {
            this.setState({ nameError: "Required" });
            return false;
        } else if (!this.state.phone) {
            this.setState({ phoneError: "Required" });
            return false;
        }else if (!this.state.email) {
            this.setState({ emailError: "Required" });
            return false;
        }else if (this.state.email && !this.state.email.match(/.+@.+..+/g)) {
            this.setState({ emailError: "*Invalid email" });
            return false;
        } else if (this.state.message && this.state.message.length > 140) {
            this.setState({ messageError: "*Message too long, limit less than 140 letters" })
            return false;
        }
        else {
            return true;
        }

    }

    handleSubmit(event) {

        event.preventDefault();
        const isValid = this.validate();
        if (!isValid) {
        // if (false) {

            console.log("validation wrong");
            this.setState(initialState);


        } else {
            console.log("validation correct");
            this.setState({ nameError: "", emailError: "", messageError: "" })

            const state= this.state;

            this.props.sendOrder(state.name, state.pickupTime, state.utensil, state.message, state.phone, state.email);

        }

    }



    handleChange(event) {

        const target= event.target;
        const value = target.type === 'checkbox'? target.checked: target.value;
        const name = target.name;

        this.setState({ [name]: value })

    }

    setPickUpTime() {

        let timeHourtemp = new Date().getHours().toString();
        let timeMin = new Date().getMinutes().toString();

        let timeHour;

        if (timeHourtemp < 10) {
            timeHour = '0' + timeHourtemp.toString();
        } else {

            timeHour = timeHourtemp.toString()
        }

        let hour = [];
        let hourTemp = [];
        for (let i = 9; i < 23; i++) {
            hourTemp.push(i);
        }

        hour = hourTemp.map(data => {
            if (data < 10) {
                data = '0' + data.toString();
            } else {

                data = data.toString()
            }
            return data;
        }

        );

        let minites = ['00', '15', '30', '45'];

        let time = [];

        for (let i = 0; i < 14; i++) {
            let tempHour = hour[i];

            for (let j = 0; j < 4; j++) {

                let temp = tempHour + ":" + minites[j];

                let obj = {};

                obj.time = temp;

                if (tempHour < timeHour) {
                    obj.disa = "disabled";
                } else if (timeHour === tempHour && minites[j] <= timeMin) {
                    obj.disa = "disabled";
                } else {
                    obj.disa = "";
                }

                time.push(obj);
            }
        }

        this.setState({ timeObj: time });

    }



    render() {

        return (
            <div className="col-md-8">

                <div className="my-2 h3 text-center">
                    Please confirm your order
                </div >

                <div className="theForm row container mx-auto my-3">

                    <form className="py-4" onSubmit={this.handleSubmit}>
                        <div className="h6 row my-0">
                            <span className="col-6 text-left h6">Order ID: {this.props.theorderID}</span>
                            <small className="col-6 text-right text-danger">* Requred</small>
                        </div>

                        <div className="form-row">
                            <div className="col-sm-6">

                                <div className="form-group mb-0">
                                    <label className="h6">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        className="inputArea form-control d-block"
                                        placeholder="Name*"
                                        onChange={this.handleChange}
                                    />
                                    <small className="validateNote">
                                        {this.state.nameError}
                                    </small>

                                </div>

                                <div className="form-group mb-0">
                                    <label className="h6">Phone Number:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={this.state.phone}
                                        className="inputArea form-control d-block"
                                        placeholder="Phone Number*"
                                        onChange={this.handleChange}
                                    />
                                    <small className="validateNote">
                                        {this.state.phoneError}</small>

                                </div>

                                <div className="form-group mb-0">
                                    <label className="h6">Email:</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        className="inputArea form-control d-block"
                                        placeholder="Email*"
                                        onChange={this.handleChange}
                                    />
                                    <label className="validateNote">
                                        {this.state.emailError}
                                    </label>

                                </div>

                                <p className="h6">Do you need utilities for your order?</p>
                                <div className="form-group custom-control custom-checkbox">

                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="utensil"
                                        value={this.state.utensil}
                                        id="defaultCheck1" 
                                        onChange={this.handleChange}
                                        />
                                    <label className="form-check-label" htmlFor="defaultCheck1">Need utilities</label>
                                </div>

                            </div>

                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label className="h6" htmlFor="time-select">Please choose your pickup time:</label>
                                    <select 
                                    className="custom-select" id="time-select"
                                    name="pickupTime"
                                    onChange={this.handleChange}
                                    value={this.state.pickupTime}
                                    >
                                        <option defaultValue value="123" disabled="">Pickup time</option>

                                        {this.state.timeObj.map((data,index) => <option key={index} value={data.time} disabled={data.disa}>{data.time}</option>)}

                                    </select>
                                </div>

                                <div className="form-group mb-0">
                                    <label className="h6">Notes: (Spicy?)</label>
                                    <textarea
                                        type="text"
                                        name="message"
                                        value={this.state.message}
                                        className="textArea inputArea form-control d-block"
                                        placeholder="Message"
                                        onChange={this.handleChange}
                                        wrap="off"
                                        cols="20"
                                        rows="6"
                                    />
                                    <label className="validateNote">
                                        {this.state.messageError}
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="inputArea btn btn-info btn-block btn-sm"
                                >Send</button>

                            </div>


                        </div>



                    </form>

                </div>


            </div>
        );
    }
}

export default OrderInfo;