import React from 'react'
import { AppBar,Toolbar,styled,InputBase,Box } from '@mui/material'
import {Menu,Search,Tune,Settings,HelpOutlineOutlined,AppsOutlined} from '@mui/icons-material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { gmailLogo } from '@/utils/constants'
const Header = ({toggleDrawer}) => {

   const StyleHeader=styled(AppBar)({
      backgroundColor:'#F5F5F5',
      boxShadow:"none",
   })

   const SearchWrapper=styled(Box)({
     backgroundColor:'#EAF1FB',
     marginLeft:80,
     borderRadius:'8px',
     minWidth:690,
     maxWidth:720,
     height:48,
     justifyContent:'space-between',
     display:'flex',
     alignItems:'center',
    
     padding:'0 20px',
     '& > div ':{
        width:"100%",
        paddingLeft:"10px"
     }
   })
   const IconsWrapper=styled(Box)({
      width:"100%",
      display:"flex",
      justifyContent:"flex-end",
      '& > svg':{
        marginLeft:20
      }
   })
  return (
    <StyleHeader position='static'>
      <Toolbar>
        <Menu color='action' onClick={toggleDrawer}/>
         <img  src={gmailLogo} style={{width:110,marginLeft:20}} alt="logo"/>
         <SearchWrapper>
          <Search color='action' />
          <InputBase placeholder='Search Mail'/>
          <Tune color='action' />
         </SearchWrapper>
         <IconsWrapper>
           <HelpOutlineOutlined color='action' />
           <Settings color='action'/>
           <AppsOutlined color='action'/>
           <AccountCircleOutlinedIcon color='action'/>
         </IconsWrapper>
      </Toolbar>
    </StyleHeader>
  )
}

export default Header