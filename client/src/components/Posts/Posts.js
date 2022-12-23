import React from 'react';
import Post from './Post/Post';
import {useSelector} from "react-redux";
import {CircularProgress} from "@mui/material"
import "./postsStyle.css"

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state)=>state.posts);
  // console.log(posts)

  return ( 
    <> 
      {!posts.length ? (
        <CircularProgress/>
      ) : (
        <div className="mulpostcard">
          {posts.map((post)=>(
            <div className="mulpostinner" key={post._id}>
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div> 
      )}
    </>
  )
}

export default Posts