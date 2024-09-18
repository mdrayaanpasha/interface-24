import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./nav";

function EndPoint5() {
    const [breachedData, setBreachedData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
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
                setBreachedData(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching data:", error.response ? error.response.data : error.message);
                setBreachedData(null);
                setError(`Error fetching data: ${error.response?.status || 'unknown'}`);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <style>
            {`
            .container {
                text-align: center;
                margin: 20px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #1E1E1E;
                font-weight: bold;
            }
            .logo {
                width: 100px;
                height: auto;
            }
            .error {
                color: red;
                margin-top: 20px;
            }
            .summary, .details {
                display: inline-block;
                width: 80%;
                max-width: 800px;
                margin-top: 20px;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: black;
            }
            
            `}
        </style>
        <Nav />

        
        <div className="container">
            <h1 className="gradient">Domain Breach Information</h1>
            <p style={{
                fontSize: '3vh',
                color: '#555',
            
                lineHeight: '1.6'
            }}>
                Discover and check if your domain has been involved in any data breaches. Our tool provides detailed information and helps you stay informed about potential security risks.
            </p>

            {error && (
                <div className="error">
                    <b>{error}</b>
                </div>
            )}

            {breachedData ? (
                <>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Breach</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(breachedData.metrics.Breach_Summary).map(([breach, count]) => (
                                <tr key={breach}>
                                    <td>{breach}</td>
                                    <td>{count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2 className="gradient">Domain Summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Domain</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(breachedData.metrics.Domain_Summary).map(([domain, count]) => (
                                <tr key={domain}>
                                    <td>{domain}</td>
                                    <td>{count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                

                {breachedData.metrics.Breaches_Details.length > 0 && (
                    <div className="details">
                        <h2 className="gradient">Breaches Details</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Breach</th>
                                    <th>Domain</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {breachedData.metrics.Breaches_Details.map((detail, index) => (
                                    <tr key={index}>
                                        <td>{detail.breach}</td>
                                        <td>{detail.domain}</td>
                                        <td>{detail.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {breachedData.metrics.Detailed_Breach_Info && (
                    <div className="details">
                        <h2>Detailed Breach Information</h2>
                        {Object.keys(breachedData.metrics.Detailed_Breach_Info).map(breach => (
                            <div key={breach}>
                                <h3>Breach: {breach}</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Breached Date</th>
                                            <td>{breachedData.metrics.Detailed_Breach_Info[breach].breached_date}</td>
                                        </tr>
                                       
                                        <tr>
                                            <th>Password Risk</th>
                                            <td>{breachedData.metrics.Detailed_Breach_Info[breach].password_risk}</td>
                                        </tr>
                                        <tr>
                                            <th>Searchable</th>
                                            <td>{breachedData.metrics.Detailed_Breach_Info[breach].searchable}</td>
                                        </tr>
                                        <tr>
                                            <th>Exposed Data</th>
                                            <td>{breachedData.metrics.Detailed_Breach_Info[breach].xposed_data}</td>
                                        </tr>
                                        <tr>
                                            <th>Exposed Records</th>
                                            <td>{breachedData.metrics.Detailed_Breach_Info[breach].xposed_records}</td>
                                        </tr>
                                        <tr>
                                            <th>Exposure Description</th>
                                            <td>{breachedData.metrics.Detailed_Breach_Info[breach].xposure_desc}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                            </div>
                        ))}
                    </div>
                )}

                <div className="summary">
                    <h2>Yearly Metrics</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(breachedData.metrics.Yearly_Metrics).map(([year, count]) => (
                                <tr key={year}>
                                    <td>{year}</td>
                                    <td>{count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </>
            ) : (
                <p>No data available.</p>
            )}
        </div>
        </>
    );
}

export default EndPoint5;
