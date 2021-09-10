import React, { useState } from 'react';

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
          <div key = {i}>
            <div>name: {item.name}</div>
            <div>body: {item.body}</div>
            <hr/>
          </div>
        )
      })}
      <button onClick={addPost}>Add Post</button>
    </>
  );
}

export default App;
