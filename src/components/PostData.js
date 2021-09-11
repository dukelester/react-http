import React, {Component} from 'react';
import axios from 'axios';
class PostData extends Component {

    constructor(props){
        super(props);
        this.setState= {
            id:'',
            title:'',
            body:'',

        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name] : e.target.value});
}
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response =>{
                console.log(response.data)})
            .catch(error =>{
                console.log(error)
            })

    }
    render(){
        const { id, title, body} = this.state;
        return (
            <div>Posting data to an api

            <form onSubmit={this.submitHandler}>Posting
            <label>User Id</label>
                <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
                <label>Title</label>
                <input type="text" name="title" value={title}  onChange={this.changeHandler}></input>
                <label>Body</label>
                <input type="text" name="body" value={body}  onChange={this.changeHandler}></input>
            </form>
                <button  type="submit">Submit</button>


            </div>

        )}
}

export default PostData;