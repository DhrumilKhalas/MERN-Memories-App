import React from 'react'
import "./navbarStyle.css"
import {
    AppBar,
    Typography,
    Toolbar,  
    Box,
  } from "@mui/material";

const Navbar = () => {
  return (
    <>
        <AppBar
        sx={{
          background:
            "radial-gradient(circle, rgba(2,0,36,0.9528186274509804) 0%, rgba(9,66,121,1) 80%, rgba(25,104,120,1) 100%)",
            position:"sticky",
            
        }}

      >
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Toolbar>
            <Box>
              <Typography variant="h4">Memories</Typography>
            </Box>
            {/* <Box>
              <img
                src="./images/Logo.jpg"
                alt="No Image Available"
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
            </Box> */}
          </Toolbar>
        </Box>
      </AppBar>
    </>
  )
}

export default Navbar  