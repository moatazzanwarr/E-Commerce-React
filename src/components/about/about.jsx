// Imports
import React from 'react'
import './about.css'
import './aboutRespon.css'
import WelcomeToNest from './welcomeToNest/welcomeToNest'
import WhatWeProvide from './whatWeProvide/whatWeProvide'
import OurPerformance from './ourPerformance/ourPerformance'
import OurTeam from './ourTeam/ourTeam'

import { Link } from 'react-router-dom'

// Icons
import icons from '../../assets/icons'

// Images
import main from "../../assets/images/MainAbout.png"

function About() {
  return (
    <section className='about'>
      <div className="bar">
        <ul>
          <li>
            <Link to='#'><icons.HomeIcon className='i'/>Home</Link>
          </li>
          <icons.ArrowForwardIosIcon className='i'/>
          <li>
            <Link to='#'>Pages</Link>
          </li>
          <icons.ArrowForwardIosIcon className='i'/>
          <li>
            <Link to='#'>About us</Link>
          </li>
        </ul>
      </div>
      <WelcomeToNest/>
      <WhatWeProvide/>
      <OurPerformance/>

      <div className='counters'>
        <div className="img">
          <img src={main} alt="main" />
        </div>
        <div className="text">
          <div>
            <h1>0+</h1>
            <h4>Glorious years</h4>
          </div>
          <div>
            <h1>0+</h1>
            <h4>Happy clients</h4>
          </div>
          <div>
            <h1>0+</h1>
            <h4>Projects complete</h4>
          </div>
          <div>
            <h1>0+</h1>
            <h4>Team advisor</h4>
          </div>
          <div>
            <h1>0+</h1>
            <h4>Products Sale</h4>
          </div>
        </div>
      </div>

      <OurTeam/>
    </section>
  )
}

export default About
