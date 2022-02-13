import React from "react";

class List extends React.Component{
    render(){
        console.log(this)
        return (
            <>
            <ul>
                <li>123</li>
                <li>234</li>
            </ul>
            <p>Name: {this.props.data}</p>
            <p>Age: {this.props.age}</p>
            </>
        );
    }
}

export default List;