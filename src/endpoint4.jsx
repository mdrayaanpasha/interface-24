import { useState } from "react";
import axios from "axios";
import Nav from "./nav";

function EndPoint4() {
    const [domain, setDomain] = useState('');
    const [breachedData, setBreachedData] = useState(null);
    const [error, setError] = useState(null);

    const fetchInfo = async () => {
        try {
            const response = await axios.get(`https://api.xposedornot.com/v1/breaches?domain=${domain}`);
            setBreachedData(response.data["Exposed Breaches"]);
            setError(null);
        } catch (error) {
            console.log(error);
            setBreachedData(null);
            setError(`It's not you, it's us! Error ${error.response?.status || 'unknown'}`);
        }
    };

    return (
        <>
        <style>
            {`
             input, .center button {
                border: none;
                height: 6vh;
                width: 15vw;
                text-align: center;
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

            .breach-info {
                margin-top: 20px;
                text-align: left;
                display: inline-block;
                width: 80%;
                max-width: 800px;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: #f9f9f9;
            }

            .breach-info img {
                width: 100px;
                height: auto;
            }
            `}
        </style>
        <Nav />

        <div style={{ textAlign: 'center', margin: '20px' }} className="center">
            <center>
                <h1>Breach Information Checker</h1>
                <input
                    type="text"
                    placeholder="Enter domain"
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                    style={{ marginRight: '10px', padding: '10px', fontSize: '16px' }}
                /> <br />
                <button
                    onClick={fetchInfo}
                    style={{ padding: '10px', fontSize: '16px' }}
                >
                    Check!
                </button>
            </center>

            {error && (
                <div style={{ color: 'red', marginTop: '20px' }}>
                    <b>{error}</b>
                </div>
            )}

            {breachedData && breachedData.length > 0 ? (
                breachedData.map((breach, index) => (
                    <div key={index} className="breach-info">
                        <h2>Breach ID: {breach["Breach ID"]}</h2>
                        <p><strong>Breached Date:</strong> {breach["Breached Date"]}</p>
                        <p><strong>Domain:</strong> {breach["Domain"]}</p>
                        <p><strong>Exposed Data:</strong> {breach["Exposed Data"]}</p>
                        <p><strong>Exposed Records:</strong> {breach["Exposed Records"]}</p>
                        <p><strong>Exposure Description:</strong> {breach["Exposure Description"]}</p>
                        <p><strong>Industry:</strong> {breach["Industry"]}</p>
                        {breach["Logo"] && <img src={`path/to/logos/${breach["Logo"]}`} alt={`${breach["Domain"]} logo`} />}
                        <p><strong>Password Risk:</strong> {breach["Password Risk"]}</p>
                        <p><strong>Searchable:</strong> {breach["Searchable"]}</p>
                        <p><strong>Sensitive:</strong> {breach["Sensitive"]}</p>
                        <p><strong>Verified:</strong> {breach["Verified"]}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>{breachedData ? <p>Nothing there</p> : null}</p>
            )}
        </div>
        </>
    );
}

export default EndPoint4;
