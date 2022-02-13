import React from "react";

class Header extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            name: "Lora",
            age:20,
        };
    }
    changeName = () =>{
        this.setState({name: this.state.name === "Lora"? "Anna" : "Lora"},()=>{
             console.log(this.state.name )
        })
       
    }
    render(){
        console.log(this.state)
        return (
            <>
            <h1>Hello {this.state.name}!</h1>
            <button onClick ={this.changeName}>Change</button>
            </>
        );
    }

}

export default Header;