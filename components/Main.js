import React, { Fragment,useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import AllEmails from './AllEmails'
const Main = () => {
  const [openDraw,setOpenDrawer]=useState(true);

  const toggleDrawer=()=>{
    setOpenDrawer(prevState=>!prevState);
  }

  return (
   <Fragment>
      <Header toggleDrawer={toggleDrawer}/>
      <SideBar openDraw={openDraw}/>
      <AllEmails  openDraw={openDraw} />
   </Fragment>
  )
}

export default Main