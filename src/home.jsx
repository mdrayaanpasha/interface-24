import { useEffect } from "react"
import axios from "axios";

function Home(){
    useEffect(()=>{
        const endpoint1 = async()=>{
            try {
                const DatafromE1 = await axios.get("https://api.xposedornot.com/v1/check-email/a@gmail.com");
                console.log(DatafromE1.data.breaches);
            } catch (error) {
                console.log(error)
            }
        }

        endpoint1()
    },[])
    return(
        <>
        
        yello
        </>
    )
}

export default Home