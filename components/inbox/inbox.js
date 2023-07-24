import React, { Fragment,useState } from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import { useRouter } from 'next/router'
import AllEmails from '../AllEmails'
const InboxComponents = ({Inbox}) => {
    
    const [openDraw,setOpenDrawer]=useState(true);
    const toggleDrawer=()=>{
        setOpenDrawer(prevState=>!prevState);
      }
  return (
   <Fragment>
    <Header  toggleDrawer={toggleDrawer} />
    <SideBar openDraw={openDraw} Inbox={Inbox}/>
    <AllEmails openDraw={openDraw} Inbox={Inbox} />
   </Fragment>
  )
}

export default InboxComponents