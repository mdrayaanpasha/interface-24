import { useState } from "react";
import axios from "axios";

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
    background-color: #gray;
    cursor: not-allowed;
}

input[type="email"] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
}

            `}
        </style>
            <h1>Breach Analytics</h1>
            <p>Enter your email to get breach analytics.</p>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button onClick={fetchData} disabled={loading}>
                {loading ? "Loading..." : "Check Analytics"}
            </button>

            {data && (
                <div className="analytics-container">
                    <h2>Breach Summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Site</td>
                                <td>{data.BreachesSummary ? data.BreachesSummary.site : "N/A"}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Exposed Breaches</h2>
                    {data.ExposedBreaches && data.ExposedBreaches.breaches_details.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.ExposedBreaches.breaches_details.map((breach, index) => (
                                    <tr key={index}>
                                        <td>{breach.name}</td>
                                        <td>{breach.description || "No description available."}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No exposed breaches found.</p>
                    )}

                    <h2>Exposed Pastes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Exposed Pastes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.ExposedPastes || "No exposed pastes available."}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Paste Metrics</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Paste Metrics</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.PasteMetrics || "No paste metrics available."}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Paste Summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Count</td>
                                <td>{data.PastesSummary ? data.PastesSummary.cnt : "N/A"}</td>
                            </tr>
                            <tr>
                                <td>Domain</td>
                                <td>{data.PastesSummary ? data.PastesSummary.domain : "N/A"}</td>
                            </tr>
                            <tr>
                                <td>Timestamp</td>
                                <td>{data.PastesSummary ? data.PastesSummary.tmpstmp : "N/A"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default EndPoint2;
