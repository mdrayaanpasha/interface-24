import { useEffect, useState } from "react"
import axios from "axios";

function EndPoint4(){
    const [domain,setDomain]=useState(null)
    const [breachedData,setBreachedData]=useState(null)
    const fetchInfo = async ()=>{
        try {
            const response = await axios.get(`https://api.xposedornot.com/v1/breaches?domain=${domain}`);
            setBreachedData(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <input type="text" name="domains" onChange={e=>setDomain(e.target.value)} id="" />
        <input type="submit" value="Submit" onClick={e=>fetchInfo()} />
        </>
    )
}

export default EndPoint4