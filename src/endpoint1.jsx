import { useState } from "react";
import axios from "axios";
import Nav from "./nav";


function EndPoint1() {
    const [email, setEmail] = useState("");
    const [breaches, setBreaches] = useState([]);
    const [error, setError] = useState("");

    const checkBreaches = async () => {
        if (email.trim() === "") {
            alert("Please enter an email address.");
            return;
        }

        try {
            const response = await axios.get(`https://api.xposedornot.com/v1/check-email/${email}`);
            setBreaches(response.data.breaches || []);
            setError(""); // Clear any previous error
        } catch (error) {
            setError('Does not Exist!');
            setBreaches([]); // Clear any previous breaches
        }
    };

    return (
        <>
        <style>
            {`
            .main h1 {
                font-size: 9vh;
                padding: 0;
                margin: 0;
                margin-top: 5vh;
            }
            input, .main button {
                border: none;
                height: 5vh;
                width: 15vw;
                font-weight: bold;
                margin-bottom: 2vh;
                font-size: 2vh;
                background: black;
                border: 1px solid silver;
                border-radius: 1vw;
                color: white;
            }
            button {
                background: #181818 !important;
                border: none !important;
            }
            .err {
                color: red;
                font-weight: bold;
            }
            `}
        </style>
        <Nav />
        <div className="main">
            <center>
                <h1 className="gradient">Check for Data Breaches</h1>
                <p>Enter your email to see if it has been compromised in any data breaches.</p>
                
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                /> <br />
                <button onClick={e=>checkBreaches()}>Check Breaches</button>
            </center>
        </div>
        {error && (
            <div className="err">
                {error}
            </div>
        )}
        {breaches.length > 0 && !error && (
            <div>
                <h2>🫢 Yahooza, You've Been Breached.</h2>
                <ul>
                {breaches.map((breach, index) => (
                    <li key={index}>
                        <p>
                            {String(breach).replace(/([A-Z])/g, ' $1')} 
                        </p>
                    </li>
                ))}
                </ul>
            </div>
        )}
        {breaches.length === 0 && !error && email && (
            <p>No breaches found for the provided email.</p>
        )}
        </>
    );
}

export default EndPoint1;
