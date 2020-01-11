import React from 'react';

const SubmitPage = (props) => {
  return (
    <div className="mid-container column-container">
      <img className="ok-img" src="/assets/images/ok.svg"></img>
      <p className="msgTitle">Thanks for Submitting!</p>
      <p align="center" className="msgContent">
        A conformation email has been sent to: <br />
        <span>{props.email}</span><br />
        Please follow the instruction in the email.
      </p>
      <button className="button-bg"
        onClick={props.handleBackHome}
      >Back to Home</button>
    </div>
  )
}

export default SubmitPage;
