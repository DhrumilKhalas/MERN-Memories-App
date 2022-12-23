import React, {useEffect, useState} from "react";
import "./appStyle.css";
import {
  Typography,
  Box,
} from "@mui/material";
import {getPosts} from "./actions/posts";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import {useDispatch} from "react-redux";
import Navbar from "./components/Navbar/Navbar";
 
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getPosts());
  }, [dispatch])

  return (
    <>
    <Navbar/>
    
      <Box className="BelowMain">
       
        <Box className="BelowMainRight">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Box>

        <Box className="poststitleouter">
            <Typography variant="h3" className="poststitle">Posts</Typography>
        </Box> 

        <Box className="BelowMainLeft">
           <Posts setCurrentId={setCurrentId} />
        </Box>

      </Box>
      
    </>
  );
};

export default App;
