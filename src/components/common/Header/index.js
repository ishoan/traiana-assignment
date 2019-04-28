import React from "react";
import {headerStrings} from '../../../constants/Strings';
import './Style.css';
import back from '../../../assets/icons/back-button.png';

const Header = ({onClick}) => {
  return (
      <div className="app-header">
        <div className="left">
          <div className="button-wrapper" onClick={() => onClick()}>
            <img alt={back} src={back}/>
          </div>
        </div>
        <div className="middle">
          <div className="title">{'Online salad shop'}</div>
        </div>
        <div className="right">
          <div className="created-by" style={{fontSize: '20px'}}>{headerStrings.CreatedBy}</div>
        </div>
      </div>
  );
};

export default Header;