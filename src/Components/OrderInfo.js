import React, { Component } from 'react';


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
            nameError: "",
            emailError: "",
            phoneError: "",
            messageError: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    validate() {

        this.setState({ nameError: "", emailError: "", messageError: "" })

        if (!this.state.name) {
            this.setState({ nameError: "Required" });
            return false;
        } else if (!this.state.email) {
            this.setState({ emailError: "Required" });
            return false;
        } else if (this.state.email && !this.state.email.match(/.+@.+..+/g)) {
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
            console.log("validation wrong");
            this.setState(initialState)
        } else {
            console.log("validation correct");
            this.setState({ nameError: "", emailError: "", messageError: "" })
        }

    }



    handleChange(event) {
        const { name, value } = event.target

        this.setState({ [name]: value })

    }


    render() {

        return (
            <div className="col-lg-8">

                <div className="mt-5 h3 text-center">
                    Please confirm your order
                </div >


                <div className="theForm row container mx-auto mb-3">

                    <form className="my-1s" onSubmit={this.handleSubmit}>
                        <div className="mt-3 h6 row my-0">
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
                                        *  NameEroor {this.state.nameError}</small>

                                </div>

                                <div class="form-group mb-0">
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
                                        * Phone error {this.state.phoneError}</small>

                                </div>

                                <div class="form-group mb-0">
                                    <label className="h6">Email:</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        className="inputArea form-control d-block"
                                        placeholder="Email"
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
                                        value=""
                                        id="defaultCheck1" />
                                    <label className="form-check-label" for="defaultCheck1">Need utilities</label>
                                </div>

                            </div>

                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label className="h6">Please choose your pickup time:</label>
                                    <select class="custom-select">
                                        <option selected>Pickup time</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="form-group mb-0">
                                    <label className="h6">Comments: (Spicy?)</label>
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