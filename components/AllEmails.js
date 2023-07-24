import React, { Fragment,useEffect,useState } from 'react'
import useApi from '@/hooks/useApi';
import { API_URL_ENDPOINT } from '@/services/api.url';
import {Box, Checkbox,styled,List,ListItem} from '@mui/material'
import {DeleteOutline} from '@mui/icons-material'
import Email from './Email';
import Nomails from './Nomails';
import { EMPTY_TABS } from '@/utils/constants';
const IconsHandler=styled(Box)({
   padding:"20px 10px 0 10px",
   display:"flex",
   alignItems:"center",
})

const AllEmails = ({openDraw,Inbox}) => {
  const [selectedEmails,setSelectedEmails]=useState([]);
  const [refresh,setRefresh]=useState(false);
  const getEmailService=useApi(API_URL_ENDPOINT.getEmailFromType);

  // console.log(getEmailService?.response?.data?.emails);
   useEffect(()=>{
     getEmailService.caller({},Inbox);
   },[Inbox,refresh]);

   const setAllChecked=(e)=>{
     e.preventDefault();
      if(e.target.checked){
      const allIds=getEmailService?.response?.data?.emails?.map(email=>email._id);
       console.log(selectedEmails);
       setSelectedEmails(allIds);
      }else{
        setSelectedEmails([]);
      }
   }
  
   const moveEmailsToBin=useApi(API_URL_ENDPOINT.moveEmailsToBin);
   const deleteEmailService=useApi(API_URL_ENDPOINT.deleteEmails);
   const deleteSelectedEmails=(e)=>{
       if(Inbox==='bin'){
          deleteEmailService.caller(selectedEmails);
       }else{
         moveEmailsToBin.caller(selectedEmails)
       }
       setRefresh(prevState=>!prevState);
   }
  return (
  <Fragment>
    <Box style={openDraw ? {marginLeft:250,width:'calc(100% - 250px)'} :{width:"100%"}}>
      <IconsHandler>
         <Checkbox size='small' onChange={(e)=>setAllChecked(e)}/>
         <DeleteOutline onClick={(e)=>deleteSelectedEmails(e)}/>
      </IconsHandler>
      <Box>
        <List>
           {getEmailService?.response?.data?.emails.map((item)=>(
              <Email key={item._id} email={item} selectedEmails={selectedEmails} setSelectedEmails={setSelectedEmails} refresh={refresh}  setRefresh={setRefresh}/>
           ))}
        </List>
        {
           getEmailService?.response?.data?.emails.length===0 && <Nomails message={EMPTY_TABS[Inbox]}/>
        }
      </Box>  
    </Box>
  </Fragment>
  )
}

export default AllEmails;
