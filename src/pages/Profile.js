import React, { useContext } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import blogPng from "../assets/blok.png";
import {AuthContext} from "../context/AuthContext"

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    
    <Container className="log-main">
      <Box className="log-box">
        <Avatar
          className="login-image"
          alt=""
          src={blogPng}
          sx={{ width: 156, height: 156 }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
        >
          Profile
        </Typography>
        {currentUser && (
        <Typography align="center">
          <Typography container  spacing={3}>
            <Typography style={{margin:"10px"}}>
              User Name
            </Typography>
            <Typography variant="h5">
              {currentUser.displayName ? currentUser.displayName : "Not Found!"}
            </Typography>
            <Typography style={{margin:"10px"}}>
              Email 
            </Typography>
            <Typography  variant="h5">
              {currentUser.email}
            </Typography>
          </Typography>
        </Typography>
        )}
      </Box>
    </Container>
  
  );
};

export default Profile;