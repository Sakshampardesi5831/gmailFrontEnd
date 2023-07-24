import React, { Fragment,useState } from "react";
import { Box, Button, colors, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { sideBarData } from "@/utils/sidebarData";
import ComposeMail from "./ComposeMail";
import { useRouter } from "next/router";
import Link from "next/link";
const SideBarContent = ({Inbox}) => {
  // console.log(Inbox);
  const [openDialog,setOpenDialog]=useState(false);
  const Container=styled(Box)({
    padding :0,
    
    '&>ul':{
      padding:'10px 0 0 8px',
      fontSize:14,
      cursor:"pointer",
    },
    '&>ul>li':{
      fontWeight:600,
    },
    '&>ul>a>li>svg':{
      marginRight:'15px'
    }

  })



  const ComposeButton = styled(Button)({
    backgroundColor: "#c2e7ff",
    color: "#001d35",
    padding: 16,
    borderRadius: 16,
    minWidth: "140px",
    textTransform: "none",
  });
   const onComposeButton=()=>{
       setOpenDialog(true);
   }
     return (
    <Fragment>
      <Container>
        <ComposeButton onClick={()=>onComposeButton()} >
          <CreateOutlined /> Compose
        </ComposeButton>
        <List>
          {
            sideBarData.map((data)=>(
              <Link style={{textDecoration:"none",color:"#000"}} key={data.name} href={`/emails/${data.name.toLowerCase()}`}>
                 <ListItem style={Inbox === data.name.toLowerCase() ? {
                  backgroundColor:"#d3e3fd",
                  borderRadius:"0px 20px 20px 0px"
              }:{}} key={data.name}>
                  <data.icons fontSize="small" ></data.icons>
                  {data.title}
                 </ListItem>
              </Link>
             ))
          }
        </List>
        <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </Container>
    </Fragment>
  );
};

export default SideBarContent;
