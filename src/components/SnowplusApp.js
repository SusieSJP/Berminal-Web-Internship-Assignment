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
      verifiedEmail: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
  }

  // pad leading zeros to fixed length.
  padZero(num, length = 2) {
    return num.toString().padStart(length, '0');
  }

  handleBackHome() {
    this.setState({
      isSubmitted: false,
      submitErrorMsg: '',
      verifiedEmail: '',
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

    fetch('http://dev.berminal.tech/snowplus/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(verifyData)
    })
    .then(res => res.json())
    .then((response) => {
      if (!response.status) {
        throw new Error(response.error.errMsg);
      }

      this.setState({
        isSubmitted: true,
        submitErrorMsg: '',
        verifiedEmail: verifyData.email
      });
    })
    .catch((error) => {
      const errMsg = error.message;
      this.setState({
        submitErrorMsg: errMsg
      })
    });
  }

  render() {
    return (
      <div className="mainbody">
        { this.state.submitErrorMsg && <p className="errMsg">{this.state.submitErrorMsg}</p>}
        {
          !this.state.isSubmitted &&
          <FormPage
            onFormSubmit={this.onFormSubmit}
          />
        }
        {
          this.state.isSubmitted &&
          <SubmitPage
            email={this.state.verifiedEmail}
            handleBackHome={this.handleBackHome}
          />
        }
      </div>
    )
  }
}
