import React, { Fragment, useState } from "react";
import { Box, Typography,styled } from "@mui/material";
import Header from "../Header";
import SideBar from "../SideBar";
import { ArrowBack, Delete } from "@mui/icons-material";
import { useRouter } from "next/router";
import { emptyProfilePic } from "@/utils/constants";
import useApi from "@/hooks/useApi";
import { API_URL_ENDPOINT } from "@/services/api.url";
/**-----------------------------ALL STYLED COMPONENTS-------------------------*/
const IconWrapper=styled(Box)({
  padding:15,
})
const Subject=styled(Typography)({
  fontSize:"22px",
  margin:"10px 0 20px 75px",
  display:"flex",
  '&>p':{
    fontSize:"22px"
  }
})
const Indicator=styled(Box)({
  fontSize:12,
  background:"#ddd",
  color:"#222",
  padding:"2px 4px",
  marginLeft:"6px",
  borderRadius:"4px",
  alignSelf:"center"
});
const Container=styled(Box)({
    marginLeft:15,
    // width:"calc(100% - 250px)",
    display:"flex"
});
const Wrapper=styled(Box)({
  // width:"100%",
  display:"flex",
  '& > p span':{
    fontSize:12,
    color:"#5E5E5E"
  }
});
const DateWrapper=styled(Box)({
   
   margin:"0 50px 0 auto !important",
   fontSize:12,
   color:"#5E5E5E"
});
const Image=styled("img")({
  borderRadius:"50%",
  width:"50px",
  height:"50px",
  margin:"5px 10px 0 10px",
  backgroundColor:"#cccccc"
})
/**-------------------------------------------------------------------------- */

const EmailDetail = ({queryValues,queryDate}) => {
  // const router = useRouter();
  const router=useRouter();
  const [openDraw, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  // const queryValues = JSON.parse(router.query.email);
  // console.log(queryValues);
  // const queryDate = queryValues.date;
  const moveEmailsToBin=useApi(API_URL_ENDPOINT.moveEmailsToBin);
  const deleteEmails=()=>{
      moveEmailsToBin.caller([queryValues._id]);
      router.back();
  }
  return (
    <Fragment>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDraw={openDraw} />
      <Box
        style={
          openDraw
            ? { marginLeft: 250, width: "calc(100% - 250px)" }
            : { width: "100%" }
        }
      >
        <IconWrapper>
          <ArrowBack
            onClick={() => window.history.back()}
            color="action"
            fontSize="small"
          />
          <Delete
            color="action"
            fontSize="small"
            style={{ marginLeft: "40px" }}
            onClick={(e)=>{deleteEmails()}}
          />
        </IconWrapper>
        <Subject>
          {queryValues.subject} &nbsp;
          <Indicator component="span">Inbox</Indicator>
        </Subject>
          <Container>
          <Image src={emptyProfilePic} alt="profile_pic" />
          <Box style={{width:"100%"}} >
            <Wrapper>
              <Typography color="action" style={{marginTop:15}}>
                {queryValues.username}
                <Box component="span">
                  &nbsp; &#60;{queryValues.to}&#62;&nbsp;
                </Box>
              </Typography>
              <DateWrapper>
                {new window.Date(queryDate).getDate()}&nbsp;
                {new window.Date(queryDate).toLocaleString("default", {
                  month: "long",
                })}
                &nbsp;
                {new window.Date(queryDate).getFullYear()}&nbsp;
              </DateWrapper>
            </Wrapper>
            <Typography style={{marginTop:30}}>{queryValues.body}</Typography>
          </Box>
           
         </Container>
      </Box>
    </Fragment>
  );
};

export default EmailDetail;
