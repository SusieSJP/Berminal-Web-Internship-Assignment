import React from 'react';
import GenderModal from './GenderModal';
import DobModal from './DobModal';

export default class FormPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      gender: '',
      birthday: undefined,
      birthdayDisplay: '',
      showGenderModal: false,
      showDobModal: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
    this.handleGenderSelect = this.handleGenderSelect.bind(this);
    this.handleDobSelect = this.handleDobSelect.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({[target.name]: target.value});
  };

  handlePopUp(event) {
    const popType = event.target.name;
    console.log(popType);
    if (popType === "birthday") {
      this.setState({showDobModal: true});
    } else {
      this.setState({showGenderModal: true});
    }
  }

  handleGenderSelect(event) {
    event.preventDefault();
    this.setState({
      showGenderModal: false,
      gender: event.target.value
    });
  }

  handleDobSelect(event) {
    let dateVal = this.state.birthday;
    let displayVal = this.state.birthdayDisplay;
    if (event instanceof Date) {
      dateVal = event;
      displayVal = event.toLocaleDateString();
    };
    this.setState({
      showDobModal: false,
      birthday: dateVal,
      birthdayDisplay: displayVal
    });
  }

  render () {
    return (
      <div className="mid-container">
        <p>Special Gift for You!</p>
        <form onSubmit={this.props.onFormSubmit}>
          <input className="form-input" type="text" id="name" name="name" placeholder="Name" required />
          <input className="form-input" type="text" id="dob" name="birthday" placeholder="Date Of Birth"
            value={this.state.birthdayDisplay}
            readOnly
            onClick={this.handlePopUp}
            required />
          {
            this.state.showDobModal &&
            <DobModal
              handleDobSelect={this.handleDobSelect}
              showDobModal={this.state.showDobModal}
              initDate={this.state.today}
            />
          }
          <input className="form-input" type="text" id="gender" name="gender" placeholder="Gender"
            value={this.state.gender}
            readOnly
            onClick={this.handlePopUp}
            required />
          {
            this.state.showGenderModal &&
            <GenderModal
              handleGenderSelect={this.handleGenderSelect}
              showGenderModal={this.state.showGenderModal}
            />
          }
          <input className="form-input" type="text" id="vender" name="vender_name" placeholder="Vender" required />
          <input className="form-input" type="email" id="email" name="email" placeholder="Email" required />
          <button className="button-bg">Get Gift</button>
        </form>
      </div>
    )
  }
}
