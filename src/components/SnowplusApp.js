import React from 'react';
import FormPage from './FormPage';
import SubmitPage from './SubmitPage';

export default class SnowplusApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isSubmitted: false,
      isConfirmed: false,
      submitErrorMsg: '',
      verifiedEmail: '',
      verifiedCode: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
  }

  padZero(num, length = 2) {
    return num.toString().padStart(length, '0');
  }

  handleBackHome() {
    this.setState({
      isSubmitted: false,
      isConfirmed: false,
      submitErrorMsg: '',
      verifiedEmail: '',
      verifiedCode: ''
    })
  }

  onFormSubmit(formData) {
    console.log('Form Submit!', formData);
    const dob = formData.birthday;
    const newDate = (dob.getFullYear() + '-' + this.padZero(dob.getMonth() + 1) + '-' + this.padZero(dob.getDate()));
    const verifyData = {
      email: formData.email,
      gender: formData.gender[0],
      name: formData.name,
      birthday: newDate,
      vendor_name: formData.vendor_name
    };

    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // get a callback when the server responds
    xhr.onload = () => {
      // update the state of the component with the result here
      console.log(JSON.parse(xhr.responseText))
      const verifyRes = JSON.parse(xhr.responseText).status;
      if (verifyRes) {
        this.setState({
          isSubmitted: true,
          submitErrorMsg: '',
          verifiedEmail: verifyData.email
        })
      } else {
        const errMsg = JSON.parse(xhr.responseText).error.errMsg;
        this.setState({submitErrorMsg: errMsg})
      }
    };
    // open the request with the verb and the url
    xhr.open('POST', 'http://dev.berminal.tech/snowplus/submit')
    // send the request
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(verifyData));
  }

  render() {
    return (
      <div>
        <div className="bg-container"><img className="bg-img" src="/assets/images/background.png"></img></div>
        <div className="navbar">
          {!this.state.isSubmitted && <img className="logo" src="/assets/images/snowplus_logo.svg"></img>}
          <p>SnowPlus Giveaway!</p>
        </div>
        <div className="mainbody">
        { this.state.submitErrorMsg && <p className="errMsg">{this.state.submitErrorMsg}</p>}
        {
          !this.state.isSubmitted && !this.state.isConfirmed &&
          <FormPage
            onFormSubmit={this.onFormSubmit}
          />
        }
        {
          this.state.isSubmitted && !this.state.isConfirmed &&
          <SubmitPage
            email={this.state.verifiedEmail}
            handleBackHome={this.handleBackHome}
          />
        }
        </div>
      </div>
    )
  }
}
