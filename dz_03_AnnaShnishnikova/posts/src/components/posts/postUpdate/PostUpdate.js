import React from "react";

export default class PostUpdate extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button
                className="update-title"
                id={this.props.id}
                onClick={this.props.onUpdateClick}
            >Update Title</button>
        );
    }
}