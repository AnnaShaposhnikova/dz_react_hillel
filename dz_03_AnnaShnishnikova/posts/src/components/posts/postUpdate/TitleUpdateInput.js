import React from "react";

export default class TitleUpdateInput extends React.Component{
    constructor (props){
        super(props)
    }

    onSafeClick(){}
    onCancelClick(){}

    render(){
        return (
            <>
                <input type="text" placeholder="Enter new title"></input>
                <button className="safe">Safe</button>
                <button className="cancel">Cansel</button>
            </>
        );
    }
}