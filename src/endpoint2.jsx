import axios from "axios";
import { useEffect } from "react";

function EndPoint2(){
    useEffect(()=>{
        const EPFetch = async()=>{
            try {
                const EP2Data = await axios.get("https://api.xposedornot.com/v1/breach-analytics?email=mohdrayaanpasha@gmail.com"); 
                console.log(EP2Data.data)
            } catch (error) {
                 console.log(error)
             }
        }
        EPFetch()
    })
    return(
        <>
        
        yello ep2
        </>
    )
}

export default EndPoint2