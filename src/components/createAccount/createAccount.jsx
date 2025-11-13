// Imports
import React from 'react'
import './createAccount.css'

// Icons
import icons from '../../assets/icons'
import { Link } from 'react-router-dom'

function CreateAccount() {
  return (
    <section className='createAccount'>
      <form action="">
        <h3>Create an Account</h3>
        <label htmlFor="email">Email</label>
        <div><input type="text" id='email' placeholder='Your email'/></div>
        <label htmlFor="phone">Phone</label>
        <div>
            <input type="text" placeholder='+20'/>
            <input type="text" id='phone' placeholder='Phone'/>
        </div>
        <label htmlFor="password">Create password</label>
        <div>
            <input type="password" id='password' placeholder='Password'/>
        </div>
        <p>By signing up, you confirm that you've read and accepted our User Notice and Privacy Policy</p>
        <input type="submit" value="Login" />
        <p>or sign up with</p>
        <div className='signBy'>
            <div className="google">
                <icons.GoogleIcon className='i'/>
                Google
            </div>
            <div className="facebook">
                <icons.FacebookIcon className='i'/>
                Facebook
            </div>
        </div>
        <div>
            Already have an account? <Link to="/signIn">Sign in now</Link>
        </div>
      </form>
    </section>
  )
}

export default CreateAccount
