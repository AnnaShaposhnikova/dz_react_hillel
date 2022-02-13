import React from "react";
import axios from "axios";
import PostItem from "../postItem/PostItem";
import PostUpdate from "../postUpdate/PostUpdate";
import { createElement } from "react";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts:[]} ;

        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    getPosts() {
        return axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/posts",
        }).then((response) => response.data);
    }

    componentDidMount() {
        this.getPosts().then((r) => this.setState({ posts: r }));
    }


    onUpdateClick(e){
        // console.log(e.target);
        // console.log(e.target.previousSibling);
        const postItem = e.target.previousSibling;
        if(e.target.id !== postItem.id){
            return;
        }
        this.renderInputChangeTtile()
        // const windowForUpdateTitle = createElement("input");
        
        // postItem.append(windowForUpdateTitle);

    }
    renderInputChangeTitle(){
        return(
            <input type="text" placeholder="Enter new title"></input>
        );
    }


    renderPostItems() {
        return this.state.posts.map((post) => {
            return (
                <div key={post.id} className = "post-item" id={post.id}>
                    <PostItem title={post.title} id={post.id}    />
                    <PostUpdate
                        onUpdateClick={this.onUpdateClick}
                        id={post.id}
                    />
                </div>
            );             
        });
    }

 

    render() {
        return this.renderPostItems();
    }
}
