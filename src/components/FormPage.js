import React from 'react';
import GenderModal from './GenderModal';

export default class FormPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      gender: '',
      dob: '',
      showGenderModal: false,
      showDobModal: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
    this.onGenderSubmit = this.onGenderSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({[target.name]: target.value});
  };

  handlePopUp(event) {
    const popType = event.target.name;
    if (popType === "dob") {
      this.setState({showDobModal: true});
    } else {
      this.setState({showGenderModal: true});
    }
  }

  onGenderSubmit(event) {
    console.log(event);
    this.setState({showGenderModal: false});
  }

  render () {
    return (
      <div className="mid-container">
        <p>Special Gift for You!</p>
        <form onSubmit={this.props.onFormSubmit}>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="text" id="dob" name="dob" placeholder="Date Of Birth"
            value={this.state.dob}
            onChange={this.handleInputChange}
            onClick={this.handlePopUp}
            required />

          <input type="text" id="gender" name="gender" placeholder="Gender"
            value={this.state.gender}
            onChange={this.handleInputChange}
            onClick={this.handlePopUp}
            required />
          {this.state.showGenderModal && <GenderModal onGenderSubmit={this.onGenderSubmit}/>}
          <input type="email" id="email" name="email" placeholder="Email" required />
          <button>Get Gift</button>
        </form>
      </div>
    )
  }
}
