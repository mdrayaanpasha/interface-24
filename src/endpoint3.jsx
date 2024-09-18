import { useEffect, useState } from "react";
import { sha3_512 } from "js-sha3";
import axios from "axios";

function EndPoint3() {
    const [password, setPassword] = useState(null);
    const [hashedpassword, setHashedPassword] = useState(null);

    useEffect(() => {
        if (password) {
            let hashed = sha3_512(password);
            setHashedPassword(hashed);
        }
    }, [password]);

    async function APICall(hashedpassword) {
        if (!hashedpassword) {
            alert("No hashed password found.");
            return;
        }
        function breakString(str, chunkSize) {
            let chunks = [];
            for (let i = 0; i < 10; i++) {
              chunks.push(str.slice(i,i+1));
            }
            return chunks;
          }
          
        try {
            setHashedPassword(breakString(hashedpassword))
            const response = await axios.get(`https://passwords.xposedornot.com/v1/pass/anon/${hashedpassword}`);

            if(!response.data){
                alert("Good to go bro")
            }else{
                alert("in trouble for sure")
            }
        } catch (error) {
            alert("good to go")
        }
    }

    return (
        <>
            <input 
                type="text" 
                name="pass" 
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)} 
            />

            <input 
                type="submit" 
                value="Check Strength?" 
                onClick={() => APICall(hashedpassword)} 
            />

            {hashedpassword && (
                <>
                    <p>Hashed Password: {hashedpassword}</p>
                </>
            )}
        </>
    );
}

export default EndPoint3;
