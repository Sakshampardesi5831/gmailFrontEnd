import axios from 'axios';


 //this for api call only and there will be and end point and this will 
 // for calling from backend to database connection
 const Api_url="http://localhost:8000"
  const API_GMAIL= async (urlObject,payLoad,type)=>{
    // console.log(urlObject.method,payLoad);
     return await axios({
         method: `${urlObject.method}`,
         url:`${Api_url}/${urlObject.endpoint}/${type}`,
         data: payLoad
     })
 }
 export default API_GMAIL;
