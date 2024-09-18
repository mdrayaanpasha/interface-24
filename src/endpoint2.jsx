import React, { useState } from "react";
import axios from "axios";
import Nav from "./nav";

function EndPoint2() {
    const [email, setEmail] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (email.trim() === "") {
            alert("Please enter an email address.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(`https://api.xposedornot.com/v1/breach-analytics?email=${email}`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
            alert("An error occurred while fetching data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <style>
            {`
            .analytics-container {
                margin: 20px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }

            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }

            th {
                background-color: #f2f2f2;
                color: #333;
            }

            tbody tr:nth-child(even) {
                background-color: #f9f9f9;
            }

            button {
                margin-top: 10px;
                padding: 10px 20px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            button:disabled {
                background-color: gray;
                cursor: not-allowed;
            }

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
            `}
        </style>
        <Nav />
        <div className="center">
            <center>
                <h1 className="gradient">Breach Analytics</h1>
                <p>Enter your email to get breach analytics.</p>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                /> <br />
                <button onClick={fetchData} disabled={loading}>
                    {loading ? "Loading..." : "Check Analytics"}
                </button>
            </center>
        </div>
        {data && (
            <>
            <div className="analytics-container">
                <h2>Industries that caused breaches</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Industry</th>
                            <th>No of breaches</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.BreachMetrics.industry && data.BreachMetrics.industry.length > 0 ? (
                            data.BreachMetrics.industry[0].map((ele, index) => (
                                <tr key={index}>
                                    <td>{ele[0]}</td>
                                    <td>{ele[1]}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="analytics-container">
                <h2>Password Strengths</h2>
                <table>
                    <thead>
                        <tr>
                            <th>EasyToCrack</th>
                            <th>PlainText</th>
                            <th>StrongHash</th>
                            <th>Unknown</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.BreachMetrics.passwords_strength && data.BreachMetrics.passwords_strength.length > 0 ? (
                            <tr>
                                <td>{data.BreachMetrics.passwords_strength[0].EasyToCrack}</td>
                                <td>{data.BreachMetrics.passwords_strength[0].PlainText}</td>
                                <td>{data.BreachMetrics.passwords_strength[0].StrongHash}</td>
                                <td>{data.BreachMetrics.passwords_strength[0].Unknown}</td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="4">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {data.BreachMetrics.risk && data.BreachMetrics.risk.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Risk Label</th>
                                <th>Risk Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.BreachMetrics.risk[0].risk_label}</td>
                                <td>{data.BreachMetrics.risk[0].risk_score}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p>No data available</p>
                )}

                {data.BreachMetrics.xposed_data && data.BreachMetrics.xposed_data.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Subcategory</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.BreachMetrics.xposed_data[0].children.map((item, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td rowSpan={item.children.length + 1}>{item.name}</td>
                                        <td>{item.children[0] ? item.children[0].name : ''}</td>
                                    </tr>
                                    {item.children.slice(1).map((child, childIndex) => (
                                        <tr key={`${index}-${childIndex}`}>
                                            <td>{child.name}</td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No data available</p>
                )}

                {data.BreachMetrics.yearwise_details && data.BreachMetrics.yearwise_details.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Number of Breaches</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data.BreachMetrics.yearwise_details[0]).map(([year, breaches], index) => (
                                <tr key={index}>
                                    <td>{year}</td>
                                    <td>{breaches}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No data available</p>
                )}
            </div>
            </> 
        )}

        {data && data.BreachesSummary && data.BreachesSummary.length > 0 && (
            <table>
                <thead>
                    <tr>
                        <th>Site</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.BreachesSummary.site}</td>
                    </tr>
                </tbody>
            </table>
        )}

        {data && data.PastesSummary && (
            <table>
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Domain</th>
                        <th>Time-stamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.PastesSummary.cnt}</td>
                        <td>{data.PastesSummary.domain || "n/a"}</td>
                        <td>{data.PastesSummary.tmpstmp || "n/a"}</td>
                    </tr>
                </tbody>
            </table>
        )}
        </>
    );
}

export default EndPoint2;
