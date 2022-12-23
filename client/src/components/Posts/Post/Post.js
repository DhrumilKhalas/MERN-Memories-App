import React from 'react';
import "./postStyle.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Box } from '@mui/material';
import {useDispatch} from "react-redux";
import { deletePost, likePost } from '../../../actions/posts';
import Tooltip from '@mui/material/Tooltip';
 
const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch();

const handleUpdate = () => {
  setCurrentId(post._id)
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });

}

const handleDelete = async () => {
  dispatch(deletePost(post._id))
  // window.scrollTo({
  //   top:0,
  //   left:0,
  //   behavior:"smooth"
  // });
  
} 

  return ( 
    <>
          
          <Card className="postpostcard" sx={{borderRadius:"20px"}}>
      <CardMedia
        component="img"
        height="220"
        image={post.selectedFile}
        alt="Not Available"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Box>
        {post.title}
        </Box>
        <Box className="momentfontsize" color="text.secondary">
       
        {"created by "}{post.creator}{", "}{moment(post.createdAt).fromNow()}
       
          
        </Box>
          
        </Typography>
        <Box color="text.secondary" className="postcardmessage">
       
         {post.message}
       
        </Box>
        <Box className="postcardtags">
        
         {post.tags.map((tag)=>`#${tag} `)}
        
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{dispatch(likePost(post._id))}}><ThumbUpAltIcon/>&nbsp;{post.likeCount}&nbsp;Like</Button>
        <Button size="small" onClick={handleDelete}><DeleteIcon/> Delete</Button>
      </CardActions>
      <Box className="hiconbtn"><Button onClick={handleUpdate} ><Tooltip title="Update"><MoreHorizIcon className="hiconbtninner"/></Tooltip></Button></Box>

</Card>
    </>
  )
}

export default Post
 
// onClick={()=>{setCurrentId(post._id)}}



 
