import React, { useEffect } from 'react';

const Post = ({item}) => {

    useEffect(()=>{
        console.log('Post Created');

        return ()=> {
            console.log('Component exit')
            // works like component did unmount
        }
    },[])

    return (
        <div>
            <div>name: {item.name}</div>
            <div>body: {item.body}</div>
            <hr/>
      </div>
    )
}

export default Post;