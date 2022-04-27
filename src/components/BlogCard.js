import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext"





import { Container } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import moment from "moment";



const BlogCard = ({contactList}) => {
  const currentUser = useContext(AuthContext)
  let navigate = useNavigate();
    

   //console.log(contactList[0].id)
  return (

    <Container>
    <Typography
      gutterBottom
      variant="h3"
      component="div"
      sx={{ fontFamily: "Girassol", textAlign: "center", color: "#046582" }}
    >
      ──── Dashboard ────
    </Typography>
    <Box
      xs={{ d: "flex" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      {contactList?.map((item) => (
        <Card
          sx={{ width: 345, m: 2, height: 600, cursor: "pointer" }}
          key={item.id}
          onClick={()=> navigate("/details", { state: { item } })}
          
        >
          <CardMedia
            component="img"
            height="250"
            image={item?.image}
            alt="img"
          />
          <CardContent >
            <Typography 
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Girassol",
                textAlign: "left",
                color: "#046582",
              }}
            >
              {item?.title}
            </Typography>
            <Typography >
               {item.date} 
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              {item?.content.substring(0, 150)}...
              
            </Typography>
          </CardContent>
          <Typography gutterBottom sx={{ ml: 2 }} variant="h6">
            <AccountCircleIcon
              style={{ position: "relative", top: "2px", fontSize: "30px" }}
            />{" "}
           {item.email}
          </Typography>
          <CardActions>
            <Button size="small">
              <FavoriteIcon
                style={{
                  marginRight: "0px",
                  color:  "gray",
                }}
              />
              
            </Button>
            <Button size="small">
              <ChatBubbleOutlineIcon
                style={{
                  marginRight: "90px",
                  color: "gray",
                }}
              />
             
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  </Container>


   
    
  )
}

export default BlogCard
