import React, { Fragment } from 'react'
import { Drawer,styled, } from '@mui/material'
import SideBarContent from './SideBarContent'
const SideBar = ({openDraw,Inbox}) => {
  return (
   <Fragment>
     <Drawer 
       anchor='left'
       open={openDraw}
       hideBackdrop={true}
       ModalProps={{keepMounted:true}}
       variant='persistent'
       sx={{'& .MuiDrawer-paper':{
           marginTop:'64px',
           width:"250px",
           height:'calc(100vh - 64px)',
           backgroundColor:'#F5F5F5',
           border:'none'
       }}}
     >
      <SideBarContent Inbox={Inbox}/>
     </Drawer>
   </Fragment>
  )
}

export default SideBar