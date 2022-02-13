import React from "react";
import TitleUpdateInput from "./TitleUpdateInput";

export default class UpdateButton extends React.Component{
    constructor(props){
        super(props)
        this.onUpdateClick = this.onUpdateClick.bind(this)
    }

    onUpdateClick(){
        this.props.onUpdateClick(this.props.id);
       
    }

    // shouldComponentUpdate()

    render(){
        return (
            <button
                className="update-title"                             
                onClick={this.onUpdateClick}
            >Update Title</button>
        );
    }
}