import React from "react";
import "./changePassword.css";

const ChangePassword = () => {
  return (
    <div className="mainContainer">
      <div className="password-container">
        <h2>Change your password</h2>
        <p>Enter a new password below to change your password</p>
        <form>
          <div className="form-group">
            <label htmlFor="new-password">New password</label>
            <input
              type="password"
              id="new-password"
              placeholder="New password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="change-password-btn">
            CHANGE PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
