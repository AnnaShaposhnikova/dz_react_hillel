import React from "react";
import axios from "axios";
import PostItem from "../postItem/PostItem";
import UpdateButton from "../postUpdate/UpdateButton";
import PostDelete from "../postDelete/PostDelete";


export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };

        this.onUpdateClick = this.onUpdateClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    static API = `https://jsonplaceholder.typicode.com/posts`;

    getPosts() {
        return axios
            .get(`${PostList.API}`)
            .then((response) => response.data)
            .catch((e) => alert("Plese,check your enternet connection"));
    }

    componentDidMount() {
        this.getPosts().then((r) => this.setState({ posts: r }));
    }

    updatePosts(id,data) {
        return axios.put(`${PostList.API}${id}`,data);
    }

     onUpdateClick(id) {

    //     const data = 
    //    this.updatePosts(id, data)
        
     }

    deletePosts(id, data) {
        return axios.delete(`${PostList.API}/${id}`,data);
    }

    onDeleteClick(id) {
        this.deletePosts(id);        
        const newPosts = this.state.posts.filter((post) => post.id !== id);       
        this.setState({ posts: newPosts });
    }

    renderPostItems() {
        return this.state.posts.map((post) => {
            return (
                <div key={post.id} className="post-item" id={post.id}>
                    <PostItem title={post.title} id={post.id} />
                    <UpdateButton
                        onUpdateClick={this.onUpdateClick}
                        id={post.id}
                    />
                    {/* if(){
                        < */}
                    {/* } */}
                    <PostDelete
                        onDeleteClick={this.onDeleteClick}
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
