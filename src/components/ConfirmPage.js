import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const ConfirmPage = () => {
  const [errMsg, setErrMsg] = useState('');

  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  let emailCodeData = {
    email: query.get("email"),
    code: query.get("code")
  };
  console.log(emailCodeData);

  useEffect(() => {
    fetch('http://dev.berminal.tech/snowplus/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailCodeData)
    })
    .then(res => res.json())
    .then((response) => {
      if (!response.status) {
        throw new Error(response.error.errMsg);
      }
    })
    .catch((error) => {
      setErrMsg(error.message)
    });
  }, []);

  return (
    <div>
      { errMsg && <div className="codeExpire-container"><p>Error: { errMsg }</p></div> }
      { !errMsg &&
        <div className="mid-container column-container">
          <img className="ok-img" src="/assets/images/ok.svg"></img>
          <p className="msgTitle">Congratulations!</p>
          <p align="center" className="msgContent">
            Please show vendor this page to get a<br />
            free SnowPlus device!
          </p>
          <button className="button-bg"
          >Back to Home</button>
        </div>
      }
    </div>
  );
}

export default ConfirmPage;
