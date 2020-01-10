import React from 'react';

export default (props) => {
  let genderChosen = '';

  return (
    <div className="modal">
      <div className="modal_content">
        <div className="radio">
          <label>
            <input type="radio" name="gender"
              onChange={() => genderChosen = "male"} />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="gender"
              onChange={() => genderChosen = "female"} />
            Female
          </label>
        </div>
        <button onClick={() => props.onGenderSubmit(genderChosen)}>Save</button>
      </div>


    </div>
  )
}
