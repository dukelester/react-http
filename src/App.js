import logo from './logo.svg';
import React , { Component}  from 'react';
import './App.css';
import PostLists from "./components/PostList";
import PostData from "./components/PostData";

function App() {
  return (
    <div className="App">

        <PostLists/>
        <PostData/>
    </div>
  );
}

export default App;
