import React, { Fragment, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const MainComponent= dynamic(()=> import('@/components/Main'),{suspense:true});
import Loader from '@/Loader/Loader';
import Main from '@/components/Main'
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
const index = () => {
  const router=useRouter();
  useEffect(()=>{
    router.push("/emails/inbox");
  },[])
  return (
    <Fragment>
       <Main/>
       {/* <Suspense fallback={<Box><Loader/></Box>}>
       <MainComponent/>
       </Suspense> */}
      
    </Fragment>
  )
}

export default index