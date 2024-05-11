import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({}) //empty object so it wont scratch the req
    //To mount or dismount a component or its life cycle event is triggered we use useEffect hook
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo;