import React from "react";
import "../post.css";

export default class PostItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="post-title">{this.props.title}</div>;
    }
}
