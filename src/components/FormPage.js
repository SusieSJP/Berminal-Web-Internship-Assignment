import React from 'react';
import GenderModal from './GenderModal';
import DobModal from './DobModal';

export default class FormPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      vendor_name: '',
      email: '',
      gender: '',
      birthday: undefined,
      birthdayDisplay: '',
      showGenderModal: false,
      showDobModal: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
    this.handleGenderSelect = this.handleGenderSelect.bind(this);
    this.handleDobSelect = this.handleDobSelect.bind(this);
  }

  get isFormValid() {
    return !!this.state.name && !!this.state.email && !!this.state.gender & !!this.state.birthdayDisplay;
  }

  handleInputChange(event) {
    event.persist();
    if (event.target.validity.valid) {
      const target = event.target;
      this.setState({[target.name]: target.value});
    }
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

  handleGenderSelect(value) {
    this.setState({
      showGenderModal: false,
      gender: value
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
      <div className="mid-container column-container">
        <p className="formTitle">Special Gift for You!</p>
        <form>
          <input className="form-input" type="text" id="name" name="name" placeholder="Name" required
            onChange={this.handleInputChange}
          />
          <input className="form-input" type="text" id="dob" name="birthday" placeholder="Date Of Birth"
            value={this.state.birthdayDisplay}
            readOnly
            onClick={this.handlePopUp}
            required
          />
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
              gender={this.state.gender}
            />
          }
          <input className="form-input" type="text" id="vender" name="vendor_name" placeholder="Vendor"
            onChange={this.handleInputChange}
          />
          <input className="form-input" type="email" id="email" name="email" placeholder="Email" required
            onChange={this.handleInputChange}
          />
          <button type="button" className="button-bg"
            disabled={!this.isFormValid}
            onClick={() => this.props.onFormSubmit(this.state)}
          >Get Gift</button>
        </form>
      </div>
    )
  }
}
