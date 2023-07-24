import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import InboxComponents from '@/components/inbox/inbox'
const Category = () => {
  const router=useRouter();
  const {category}=router.query
  // console.log(category);
  return (
    <Fragment>
      <InboxComponents Inbox={category}/>
    </Fragment>
  )
}

export default Category