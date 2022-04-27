import Box from "@mui/material/Box";
import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom'
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext"
import {DeleteUser} from "../helpers/functions"
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Container } from "@mui/material";
import { Grid } from "@mui/material";
import moment from "moment";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toastSuccessNotify } from "../helpers/toastNotify";






const Details = () => {
  // const {contactList}=useFetch();
  let navigate = useNavigate();


  const location = useLocation();
  const item = location.state.item;
  
  const { currentUser } = useContext(AuthContext);
  const privateId  = currentUser.reloadUserInfo.localId;
 
  



    
  return (
    <Container>
    <Typography
      gutterBottom
      variant="h3"
      component="div"
      sx={{ fontFamily: "Girassol", textAlign: "center", color: "#046582" }}
    >
      ──── Details ────
    </Typography>
    <Card sx={{ m: 9, cursor: "pointer" }} key={item.id}>
      <CardMedia sx={{width:"auto",height:"50vh",margin:"auto"}} component="img" image={item.image} alt="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography>
             {item.date}
           </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.content}
        </Typography>
      </CardContent>
      <Typography gutterBottom sx={{ ml: 2 }} variant="h5">
        <AccountCircleIcon
          style={{ position: "relative", top: "5px", fontSize: "30px" }}
        />
        {item.email}
      </Typography>
      
    {item.privateId === privateId&& (
      <Container style={{display:"flex",justifyContent:"space-around",marginTop:"10px",marginBottom:"20px" }}>
        <Grid item xs={12}>
          <Button
            style={{ backgroundColor: "#046582", fontWeight: 700,fontSize:"1rem",width:"100px"}}
            variant="contained"
            color="primary"
            type="submit"
            
            onClick={() => navigate("/update-blog", { state: { item } })}
           
          >
            Update
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button
            style={{
              
              backgroundColor: "#F50D57",
              color: "white",
              fontWeight: 600,
              fontSize: "0.9rem",
              fontSize:"1rem",
              width:"100px"
            }}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={()=>DeleteUser(item.id,navigate)}
           
            
          >
            Delete
          </Button>
        </Grid>
      </Container>
    ) }
    </Card>
  </Container>





//     <>
//     <Box
         
//          xs={{ d: "flex" }}
//          display="flex"
//          alignItems="center"
//          justifyContent="space-evenly"
         
//          flexWrap="wrap"
//          >

   
//      <Box
         
//          xs={{ d: "flex" }}
//          display="flex"
//          alignItems="center"
//          justifyContent="space-evenly"
         
//          flexWrap="wrap"
//          >
//     <Card sx={{ margin: "100px auto"}}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image={log.image}sx={{
//           objectFit: "scale-down",
//           height: "300px",
//           margin: "0 auto",
//         }}
//         />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div" color="primary">
//         {log.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//             {log.content}
//         </Typography>
//       </CardContent>

//       {/* {log.privateId === privateId&&(<CardActions>
//         <Button onClick={()=>editHandler(
//                 log.id,
//                 log.title,
//                 log.image,
//                 log.content,
//                 log.privateId,
//                 navigate
                

//               )} size="small">Update</Button>
//         <Button  onClick={()=>DeleteUser(log.id,navigate)} size="small" >Delete</Button>
//       </CardActions>)} */}


//  {log.privateId === privateId&&(
// <Container>
//           <ButtonGroup
//             variant="outlined"
//             size="large"
//             aria-label="outlined button group"
//             fullWidth
//             sx={{ marginTop: 5, marginBottom: 5 }}
//           >
//             <Button color="info" onClick={()=>editHandler(
//                 log.id,
//                 log.title,
//                 log.image,
//                 log.content,
//                 log.privateId,
//                 navigate
                

//               )}>
//               Update
//             </Button>
//             <Button color="error" onClick={()=>DeleteUser(log.id,navigate)}>
//               Delete
//             </Button>
//           </ButtonGroup>
//         </Container>)}
     
//     </Card>
//     </Box>
    
//     </Box>
   

//         </>
    
    
  )
}

export default Details