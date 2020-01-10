import React from 'react';
import FormPage from './FormPage';

export default class SnowplusApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isSubmitted: false,
      isConfirmed: false
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    console.log(event.target.action);
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
        {
          !this.state.isSubmitted && !this.state.isConfirmed &&
          <FormPage onFormSubmit={this.onFormSubmit}/>
        }
        </div>
      </div>
    )
  }
}
