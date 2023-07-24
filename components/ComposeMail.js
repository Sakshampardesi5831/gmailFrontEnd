import React, { Fragment, useState } from "react";
import {
  Dialog,
  styled,
  Box,
  InputBase,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import useApi from "@/hooks/useApi";
import { API_URL_ENDPOINT } from "@/services/api.url";
/*---------------All Imports--------------------------------------------*/



const dialogStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "80%",
  height: "90%",
  borderRadius: "10px 10px 0 0",
};
const HeaderWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  backgroundColor: "#f2f6fc",
  "&>p": {
    fontWeight: 500,
  },
});

const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "&> div": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: "10px",
  },
});
const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
});

const ButtonStyle = styled(Button)({
  width: 110,
  color: "#fff",
  backgroundColor: "#0b57d0",
  borderRadius: "10px",
  fontWeight: 500,
});
const config = {
  Host: "smtp.elasticemail.com",
  Username: "nayanaprasad1234@yopmail.com",
  Password: "ABCCCAFC70334026F798C9BF0E3AEA76DB4F",
  Port: 2525,
};


/*-------------ALL MATERIAL UI CSS IMPLEMENTED--------------------------------------------------------------*/
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const sendMailService=useApi(API_URL_ENDPOINT.saveSendEmail);
  const saveDraftEmails=useApi(API_URL_ENDPOINT.saveDraftEmails);
  const [data,setData]=useState({});
  /*------------ALL BLANK COMPOSE EMAIL SAVE TO DRAFT-------------------------------------------------------------------*/
  const closeDialog = () => {
    if (window.Email) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: process.env.NEXT_PUBLIC_USERNAME,
        Password: process.env.NEXT_PUBLIC_PASSOWORD,
        Port: 2525,
        To: data.to,
        From: "sakshampardesi5831@gmail.com",
        Subject: data.subject,
        Body: data.textarea,
      }).then((message) => alert(message));
    } 
    /**------------------------------------------------------- */
    const payLoad={
      to:data.to,
      from:"sakshampardesi5831@gmail.com",
      subject:data.subject,
      body:data.textarea,
      date:new Date(),
      image:"",
      username:"SAKSHAM PARDESI",
      starred:false,
      type:'draft'
    }
    // console.log(payLoad);
      console.log(sendMailService);
      saveDraftEmails.caller(payLoad);
    if(!saveDraftEmails.error){
       setOpenDialog(false);
       setData({});
    }else{

    }
    setOpenDialog(false);
  };


  /**----------------------EMAIL SENDING AND SAVE IN THE SEND----------------------------------------- */
  const sendMailHandler = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: process.env.NEXT_PUBLIC_USERNAME,
        Password: process.env.NEXT_PUBLIC_PASSOWORD,
        Port: 2525,
        To: data.to,
        From: "sakshampardesi5831@gmail.com",
        Subject: data.subject,
        Body: data.textarea,
      }).then((message) => alert(message));
    }
    
    

    
  /**------------------------------------------------------- */
    const payLoad={
      to:data.to,
      from:"sakshampardesi5831@gmail.com",
      subject:data.subject,
      body:data.textarea,
      date:new Date(),
      image:"",
      username:"SAKSHAM PARDESI",
      starred:false,
      type:'send'
    }
    // console.log(payLoad);
      console.log(sendMailService);
       sendMailService.caller(payLoad);
    if(!sendMailService.error){
       setOpenDialog(false);
       setData({});
    }else{

    }
    setOpenDialog(false);
  };
  const onValueChanged=(e)=>{
      // console.log(e.target.name,e.target.value);
      setData({...data,[e.target.name]:e.target.value});
      // console.log(data);
  }
  return (
    <Fragment>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <HeaderWrapper>
          <Typography>New Message</Typography>
          <Close onClick={() => closeDialog()} />
        </HeaderWrapper>
        <RecipientsWrapper>
          <InputBase placeholder="Recipients" name="to" onChange={(e)=>onValueChanged(e)} ></InputBase>
          <InputBase placeholder="Subject" name="subject"  onChange={(e)=>onValueChanged(e)}></InputBase>
        </RecipientsWrapper>
        <TextField
          name="textarea"
          onChange={(e)=>onValueChanged(e)}
          multiline
          rows={18}
          sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        />
        <Footer>
          <ButtonStyle onClick={(e) => sendMailHandler(e)}>Send</ButtonStyle>
          <DeleteOutline onClick={() => setOpenDialog(false)} />
        </Footer>
      </Dialog>
    </Fragment>
  );
};

export default ComposeMail;
