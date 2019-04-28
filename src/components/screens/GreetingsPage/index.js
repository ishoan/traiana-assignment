import React from "react";
import {goToPage} from '../../../services/navigationService';
import {greetings} from '../../../constants/Strings';
import './Style.css';

const GreetingsPage = () => {
  return (
      <div className="container">
        <div className="content-container">
          <div className="title">
            {greetings.welcome}
          </div>
          <div className="button" onClick={() => goToPage('IngredientsPage')}>
            <div className="button-text">
              {greetings.buttonText}
            </div>
          </div>
        </div>
      </div>
  );
};

export default GreetingsPage;
