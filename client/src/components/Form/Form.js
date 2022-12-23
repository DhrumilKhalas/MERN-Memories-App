import React, { useState, useEffect } from 'react'
import {Button, TextField, Typography} from "@mui/material"
// import FileBase from "react-file-base64";
import "./formStyle.css"
import {useDispatch, useSelector} from "react-redux";
import { createPost, updatePost } from "../../actions/posts"

const Form = ({setCurrentId, currentId}) => {
  const [postData, setPostData] = useState({
    creator:"",
    title:"",
    message:"",
    tags:"", 
    selectedFile:""
  })

  const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id===currentId) : null)

  useEffect(()=>{
    if(post){
      setPostData(post)
    }
  }, [post])

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId, postData))
      alert("Post Updated Successfully!")
    }else{
      dispatch(createPost(postData))
      alert("Post Created Successfully!")
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    clear()
    
    //  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

  }

  const clear = () => {
   setCurrentId(null);
   setPostData({
    creator:"",
    title:"",
    message:"",
    tags:"", 
    selectedFile:""
   })
  }

  return (
    <>
    <div className="formheading">{currentId ? "Editing" : "Creating"} a Memory</div>
      <form onSubmit={handleSubmit} className="formmain" autoComplete='off'>

        <div className="forminputinhomepage">
        <TextField 
          name="creator"
          variant='outlined'
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e)=> setPostData({...postData, creator: e.target.value})}
          className="forminput"
        />
        </div>

        <div className="forminputinhomepage">
        <TextField 
          name="title"
          variant='outlined'
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e)=> setPostData({...postData, title: e.target.value})}
          className="forminput"
        />
        </div>

        <div className="forminputinhomepage">
        <TextField 
          name="message"
          variant='outlined'
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e)=> setPostData({...postData, message: e.target.value})}
          className="forminput"
        />
        </div>

        <div className="forminputinhomepage">
        <TextField 
          name="tags"
          variant='outlined'
          label="Tags"
          helperText='Add all tags, without any space, separated by a comma.'
          fullWidth
          value={postData.tags}
          onChange={(e)=> setPostData({...postData, tags: (e.target.value).split(",")})}
          className="forminput"
        />
        </div>

        <div className="forminputinhomepage">
        <TextField 
          name="selectedFile"
          variant='outlined'
          label="Image URL"
          fullWidth
          value={postData.selectedFile}
          onChange={(e)=> setPostData({...postData, selectedFile: e.target.value})}
          className="forminput"
        />
        </div>

        {/* <div className='fileInput' id="forminputfile">
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile:base64 })}
            
          />
        </div> */}

        <div className="forminputinhomepage">
        <Button variant="contained" color="primary" size="medium" type="submit" fullWidth className="forminput">SUBMIT</Button>
        </div>

        <div className="forminputinhomepage">
        <Button variant="contained" color="secondary" size="medium" onClick={clear} fullWidth className="forminput">CLEAR</Button>
        </div>

      </form>
    </>
  )
} 

export default Form 

  