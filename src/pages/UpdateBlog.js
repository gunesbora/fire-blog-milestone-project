import React from 'react'

import {useState} from "react"
import { useLocation,useNavigate } from 'react-router-dom'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Box';

// import TextField from '@mui/material/TextField';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext"
import { AddUser,EditUser} from '../helpers/functions';
import logoBlock from '../assets/blok.png'



import moment from 'moment';

import {
    
    FormControl,
    InputLabel,
    TextField,
    InputAdornment,
    MenuItem,
    Button,
    Stack,
    Select,
    Box,
    Container,
    
    Avatar,
    Typography,
    Grid,
    
  } from "@mui/material";
const UpdateBlog = () => {
  const {currentUser } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const item = location.state.item

  const [info,setInfo]=useState({id:item.id,title:item.title,content:item.content,privateId:item.privateId,email:currentUser.email,date:""});

  const handleChange = (e) => {
    e.preventDefault();
    const privateId  = currentUser.reloadUserInfo.localId
    const{name,value} = e.target;
    
    const date = moment().format('LL');
    
    setInfo({...info,[name]:value,privateId,date})
    
    
  }


  const handleFormSubmit = (e)=>{
      
    
    e.preventDefault()
    EditUser(info,navigate)
    
}



  return (
    <Container className="log-main"  style={{ height: "100vh" }}>
      <Box className="log-box">
        <Avatar
          className="login-img"
          alt=""
          src={logoBlock}
          sx={{ width: 156, height: 156 }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
        >
          ── UPDATE ──
        </Typography>
        
        <form 
        onSubmit={handleFormSubmit}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                name="title"
                variant="outlined"
                type="text"
                autoFocus
                autoComplete="title"
                required
                value={info.title}
                onChange={handleChange}
               
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="imgUrl"
                label="Image URL"
                name="image"
                variant="outlined"
                type="text"
                autoComplete="image-url"
                required
                value={info.image}
                onChange={handleChange}
  
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="content"
                label="Content"
                name="content"
                multiline
                variant="outlined"
                type="text"
                rows={10}
                autoFocus
                autoComplete="content"
                required
                value={info.content}
                onChange={handleChange}
  
          
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ backgroundColor: "#046582", fontWeight: 700 }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Add Blog
              </Button>
            </Grid>
          </Grid>
        </form>
       
      </Box>
    </Container>


  
  )
}

export default UpdateBlog
