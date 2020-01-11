import React from 'react';
import Modal from 'react-modal';

const GenderModal = (props) => (
  <Modal
    isOpen={props.showGenderModal}
    contentLabel="Selected Gender"
    appElement={document.getElementById('app')}
    className="modal"
    overlayClassName="overlay"
  >
    <div className="column-container">
      <div className="row-container space-between option"
        onClick={() => props.handleGenderSelect("Male")}
      >
        <label>Male</label>
        <input className="radio" type="radio" name="gender" checked={props.gender === "Male"} readOnly/>
      </div>
      <div className="row-container space-between option"
        onClick={() => props.handleGenderSelect("Female")}
      >
        <label>Female</label>
        <input className="radio" type="radio" name="gender" checked={props.gender === "Female"} readOnly/>
      </div>
    </div>
  </Modal>
);

export default GenderModal;
