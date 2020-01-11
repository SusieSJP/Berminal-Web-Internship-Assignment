import React from 'react';

const HeaderBg = () => {
  return (
    <div>
      <div className="bg-container">
        <img className="bg-img" src="/assets/images/background.png"></img>
      </div>
      <div className="navbar">
        <img className="logo" src="/assets/images/snowplus_logo.svg"></img>
        <p>SnowPlus Giveaway!</p>
      </div>
    </div>
  )
}

export default HeaderBg;
