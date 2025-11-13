// Imports
import React from "react";
import './signIn.css'

// Icons
import icons from "../../assets/icons";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className="signIn">
      <form action="">
        <h3>Sign in</h3>
        <div>
          <input type="text" id="email" placeholder="Your email" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
        <Link className="reset" to="/changePassword">Reset Password</Link>
        <p>or sign up with</p>
        <div className="signBy">
          <a className="google">
            <icons.GoogleIcon className="i" />
            Sign in using google
          </a>
          <a className="facebook">
            <icons.FacebookIcon className="i" />
            Sign in using facebook
          </a>
        </div>
        <div>
          Don't have account? <Link to="/createAccount">Sign up</Link>
        </div>
      </form>
    </section>
  );
}

export default SignIn;
