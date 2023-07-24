import { CircularProgress ,Box,styled } from "@mui/material";

import React, { Fragment } from 'react'



const Loader = () => {
  return (
    <Fragment>
      <Box sx={{display:"flex"}}>
        <CircularProgress/>
      </Box>
    </Fragment>
  )
}

export default Loader