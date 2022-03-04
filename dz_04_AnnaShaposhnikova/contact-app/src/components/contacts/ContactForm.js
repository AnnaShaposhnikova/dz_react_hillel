import React from "react";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.contact ? this.props.contact.name : "",
            lastName: this.props.contact ? this.props.contact.lastName : "",
            phone: this.props.contact ? this.props.contact.phone : "",
            errors: {
                name: "",
                lastName: "",
                phone: "",
            },
        };

        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSaveClick(event) {
        event.preventDefault();

        const errors = validateForm(this.state);
        this.setState({ errors: errors });
        if (Object.keys(errors).length) {
            return;
        }

        this.props.onSaveClick(this.state);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    onCancelClick() {
        this.props.onCancelClick("contacts");
    }

    render() {
        let errorFirstName;
        let errorLastName;
        let errorPhone;

        if (this.state.errors.name) {
            errorFirstName = (
                <div className="error">{this.state.errors.name}</div>
            );
        }

        if (this.state.errors.lastName) {
            errorLastName = (
                <div className="error">{this.state.errors.lastName}</div>
            );
        }

        if (this.state.errors.phone) {
            errorPhone = <div className="error">{this.state.errors.phone}</div>;
        }

        return (
            <div id="create-form">
                <form onSubmit={this.onSaveClick}>
                    <label htmlFor="firstName"> First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></input>
                    {errorFirstName}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    ></input>
                    {errorLastName}

                    <label htmlFor="tel">Phone number</label>
                    <input
                        id="tel"
                        type="tel"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    ></input>
                    {errorPhone}

                    <button id="save-contact">Save</button>
                    <button id="cancel" onClick={this.onCancelClick}>
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}

function validateForm(formDataObj) {
    const errors = {};

    if (!formDataObj.name) {
        errors.name = "First name is empty";
    } else if (formDataObj.name.length < 3 || formDataObj.name.length > 25) {
        errors.name = "Length of first name must be from 3 to 25";
    }

    if (!formDataObj.lastName) {
        errors.lastName = "Last name is empty";
    } else if (
        formDataObj.lastName.length < 3 ||
        formDataObj.lastName.length > 25
    ) {
        errors.lastName = "Length of last name must be from 3 to 25";
    }

    if (!formDataObj.phone) {
        errors.phone = "Phone is empty";
    } else if (!formDataObj.phone.match(/\+?([0-9-() ]+)/)) {
        errors.phone = "Wrong phone type";
    } else if (formDataObj.phone.length < 10 || formDataObj.phone.length > 25) {
        errors.phone = "Length of phone must be from 10 to 25";
    }

    return errors;
}
