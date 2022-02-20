import React from "react";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
                name:"",
                lastName:"",
                phone:"",       
           
            // isValidFirstName :true,
        };

        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    onSaveClick(event){  
        console.log(this.state);     
       this.props.onSaveClick(this.state);
        event.preventDefault();       
    }

    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]:event.target.value,
        })
    }

    onCancelClick(){
        this.props.onCancelClick("contacts");
    }    

    render() {
        // let error;
        // if(!this.state.isValidFirstName){
        //     error = <div className="error">Enter first name</div>
        // }
        
        return (
            <div id="create-form">
                <form onSubmit={this.onSaveClick}>
                    <label htmlFor="firstName"> First Name</label>
                    <input id="firstName" type="text" name="name" onChange={this.handleChange}></input>
                    {/* {error} */}
                   
                    <label htmlFor="lastName">Last Name</label>
                                       
                    <input id="lastName" type="text" name="lastName" onChange={this.handleChange}></input>
                    <label htmlFor="tel">Phone number</label>
                    <input id="tel" type="tel" name ="phone" onChange={this.handleChange}></input>
                    <button id="save-contact">Save</button>
                    <button id="cancel" onClick={this.onCancelClick}>Cancel</button>
                </form>
            </div>
        );
    }
}
