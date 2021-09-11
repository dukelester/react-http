import React, { Component } from 'react';
import axios from 'axios';
class PostLists extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
        };


    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response);
                this.setState= {
                    posts: response.data

                }
            })
        .catch(error =>{
            console.log('erro occurred while accessing the get request');
        })
    }
    render(){
        const { posts } = this.state;

        return (
            <div>
                <h2>My Post lists</h2>
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}> <h2>{post.title}</h2></div>):
                        null
                }
            </div>
        )

    }

}

export default PostLists;