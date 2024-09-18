import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function EndPoint5() {
    const [breachedData,setBreachedData]=useState(null)
    useEffect(() => {
        const fetch5 = async () => {
            try {
                const response = await axios.post(
                    "https://api.xposedornot.com/v1/domain-breaches/",
                    {},
                    {
                        headers: {
                            "x-api-key": "0ef9f49ae62860584f8db06faf3f5bd5", // Replace with your actual API key
                            "Content-Length": 0
                        }
                    }
                );
                
                // Log the response data to the console
                setBreachedData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error.response ? error.response.data : error.message);
            }
        };
        
        fetch5();
    }, []);
    
    return (
        <>
            <p>yello ep5</p>
        </>
    );
}

export default EndPoint5;
