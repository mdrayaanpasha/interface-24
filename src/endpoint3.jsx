import { useEffect, useState } from 'react';
import { sha3_512 } from 'js-sha3';
import axios from 'axios';
import Nav from './nav'; // Assuming you have a Nav component

function EndPoint3() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (password) {
      const hashed = sha3_512(password);
      setHashedPassword(hashed);
    }
  }, [password]);

  async function checkPassword() {
    if (!hashedPassword) {
      alert('No hashed password found.');
      return;
    }

    const first10Chars = hashedPassword.slice(0, 10);

    try {
      const response = await axios.get(`https://passwords.xposedornot.com/v1/pass/anon/${first10Chars}`);
      if (response.data.Error) {
        setError(response.data.Error);
        setResult(null);
      } else {
        setResult(response.data);
        setError(null);
      }
    } catch (error) {
      setError('An error occurred while fetching the data');
      setResult(null);
    }
  }

  return (
    <>
      <style>
        {`
        .center {
          text-align: center;
          margin: 0 auto;
          padding: 20px;
        }
        .center h1 {
          font-size: 8vh;
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
        .result-good, .result-bad {
          background: lightgreen;
          height: 10vh;
          width: 15vw;
          padding: 5vw;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4vh;
          border-radius: 2vw;
          margin-top: 10vh;
        }
        .result-bad {
          background-color: tomato;
        }
        .error {
          margin-top: 10vh;
          color: red;
          font-size: 2vh;
        }
        `}
      </style>
      <Nav />
      <div className="center">
        <h1 className='gradient'>Password Exposure Checker 💪</h1>
        <p>Enter a password to see if it is exposed in data breaches</p>
        <input
          type="text"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={checkPassword}>Check Password!</button>
        {result && (
            <center>
          <div className="result-good">
            <b>Good To Go! Password is not exposed</b>
          </div>
          </center>
        )}
        {error && (
            <center>
          <div className="result-good">
          <b>Good To Go! Password is not exposed</b>
        </div>
        </center>
        )}
        {result === null && !error && (
            <center>
          <div className="result-bad">
            <b>Use Something Else</b>
          </div>
          </center>
        )}
      </div>
    </>
  );
}

export default EndPoint3;
