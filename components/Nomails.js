import React, { Fragment } from 'react'
import { Box,Typography,Divider,styled } from '@mui/material'
import {} from '@mui/icons-material'


const Components=styled(Box)({
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  marginTop:"50px",
  opacity:"0.7",
  width:"100%",
})
const StyleDivider=styled(Divider)({
    width:"100%",
    marginTop:"10px"
})
const Nomails = ({message}) => {
  return (
    <Fragment>
        <Components>
            <Typography>{message.heading}</Typography>
            <Typography>{message.subHeading}</Typography>
            <StyleDivider/>
        </Components>
    </Fragment>
  )
}

export default Nomails