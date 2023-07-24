import React, { Fragment } from 'react'
import EmailDetail from '@/components/view/EmailDetail'
import { useRouter } from 'next/router'
const view = () => {
  const router=useRouter();
  const queryValues = JSON.parse(router.query.email);
  console.log(queryValues);
  const queryDate = queryValues.date;
  return (
    <Fragment>
      <EmailDetail queryValues={queryValues} queryDate={queryDate}/>
    </Fragment>
  )
}

export default view