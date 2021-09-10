import React, { useState, useEffect } from 'react';

import Post from './post';

const App = ({initialCount}) => {

  //let [count, setCount] = useState(initialCount); **ONLY ONE VARIABLE**

  const [state,setState] = useState({
    count: initialCount,
    user:"Francis"
  });

  let [posts, setPosts] = useState([
    {
      name:'This is the first post',
      body:'The content of the first post'
    },
    {
      name:'This is the second post',
      body:'the content of the second post'
    }
  ])

  const subOne = () => {             
    setState({
      ...state,
      count: state.count-1
    })
  }

  const addPost = () => {
    let newPost = {
      name:'new post name',
      body:'new post body'
    }
    setPosts([
      ...posts,newPost])
  }

  const removePosts = () => {
    
    setPosts([])
  }


  useEffect(()=>{
    // console.log('change on state')
  },[state])

  useEffect(()=>{
    //console.log('change on posts')
  },[posts])

  useEffect(()=> {
    //console.log('Mounted')
  },[])


  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={ () => setState({
          ...state,
          count:state.count+1
          })}>Add 1</button>
      <button onClick={ subOne }>Subtract 1</button>
      {/* <button onClick={()=>{setCount(initialCount)}}>Reset</button> */}

      <hr/>
      {posts.map((item, i) => {
        return(
          <Post item={item} key ={i} />
        )
      })}
      <button onClick={addPost}>Add Post</button>
      <button onClick={removePosts}>Remove Posts</button>
    </>
  );
}

export default App;
