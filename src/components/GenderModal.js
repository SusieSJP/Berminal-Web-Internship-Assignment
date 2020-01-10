import React from 'react';
import Modal from 'react-modal';

const GenderModal = (props) => (
  <Modal
    isOpen={props.showGenderModal}
    contentLabel="Selected Gender"
    appElement={document.getElementById('app')}
    className="modal"
  >
    <div className="column-container">
      <div className="row-container space-between option" onClick={props.handleGenderSelect}>
        <label>Male</label>
        <input className="radio" type="radio" name="gender" value="Male"/>
      </div>
      <div className="row-container space-between option" onClick={props.handleGenderSelect}>
        <label>Female</label>
        <input className="radio" type="radio" name="gender" value="Female"/>
      </div>
    </div>
  </Modal>
);

export default GenderModal;
