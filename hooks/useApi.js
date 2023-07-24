import { useState } from "react";
import API from "@/services/api";
const useApi=(urlObject)=>{
    const [response,setResponse]=useState(null);
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const caller=async (payLoad,type='')=>{
        setResponse(null);
        setIsLoading(true);
        setError("");
        console.log(payLoad);
        console.log(type);
        try {
            let res=await API(urlObject,payLoad,type);
            setResponse(res);
        } catch (error) {
            setError(error.message);
        }finally{
            setIsLoading(false);
        }
    }
    return {caller ,response,error,isLoading};
}

export default  useApi;