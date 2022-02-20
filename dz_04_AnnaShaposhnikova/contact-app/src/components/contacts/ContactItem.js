import React from "react";
import './contact.css';

export default class ContactItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>  
                    <div className="firstName">{this.props.name}</div>
                    <div className="lastName">{this.props.lastName}</div>
                    <div className="tel">{this.props.phone}</div>
              
            </>
        );
    }


}
