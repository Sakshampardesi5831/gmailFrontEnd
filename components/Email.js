import React, { Fragment,useEffect,useState } from 'react'
import { Box,Typography,Checkbox,styled } from '@mui/material'
import {Star,StarBorder} from '@mui/icons-material'
import { useRouter } from 'next/router'
import useApi from '@/hooks/useApi'
import { API_URL_ENDPOINT } from '@/services/api.url'
const WrapperStyle=styled(Box)({
  padding:'0 0 0 10px',
  backgroundColor:"#f2f6fc",
  cursor:"pointer",
  display:"flex",
  alignItems:"center",
  '& >div':{
    display:"flex",
    width:"100%",
    '&>p':{
       fontSize:14
    }
  }
})
const Indicator=styled(Typography)({
    fontSize:"12px !important",
    backgroundColor:"#ddd",
    color:'#222',
    padding:"0 4px",
    borderRadius:"4px"

})
const DateWrapper=styled(Typography)({
    marginLeft:"auto",
    paddingRight:"20px",
    fontSize:"12px",
    color:'#7b8085',
    gap:"15px",
})

const TextWrapper=styled(Typography)({
     marginLeft:"10px",

});
const Email = ({email,selectedEmails,setRefresh,setSelectedEmails}) => {
   const router=useRouter();
   const toggleStarredService=useApi(API_URL_ENDPOINT.toggleStarredEmail);
  //console.log(selectedEmails);
  const detailEmails=()=>{
    // router.push("/view");
    router.push({
      pathname:"/view",
      query:{email:JSON.stringify(email)}
    },"/view");
  }
  const toggleService=()=>{
    toggleStarredService.caller({id:email._id,value:!email.starred});
    setRefresh(prevState=>!prevState);
  }
  const onChangeValue=()=>{
     if(selectedEmails.includes(email._id)){
         setSelectedEmails(prevState=>prevState.filter((id)=>id!==email._id));
     }else{
        setSelectedEmails(prevState=>[...prevState,email._id]);

      }
  }
  return (
   <Fragment>
      <WrapperStyle>
         <Checkbox fontSize='small' onChange={()=>onChangeValue()}  checked={selectedEmails.includes(email._id)}/>
         {email.starred ? <Star fontSize='small' style={{marginRight:10,color:"yellow",opacity:"0.7"}} onClick={()=>toggleService()}/>:<StarBorder fontSize='small' style={{marginRight:"10px"}} onClick={()=>toggleService()}/>}
         <Box onClick={(e)=>detailEmails()}>
          <Typography style={{width:200,overflow:"hidden"}}>{email?.username}</Typography>
          <Indicator>Inbox</Indicator>
          <TextWrapper>{email?.subject}{email?.textarea && '-'}{email?.textarea}</TextWrapper>
          <DateWrapper>
            {new window.Date(email?.date).getDate()} &nbsp;
            {new window.Date(email?.date).toLocaleString('default',{month:'long'})}
          </DateWrapper>
         </Box>
      </WrapperStyle>
   </Fragment>
  )
}

export default Email