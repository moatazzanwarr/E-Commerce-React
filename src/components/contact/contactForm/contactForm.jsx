// Imports
import React from "react";
import "./contactForm.css";

// Images
import formImg from "../../../assets/images/contactForm.png";

function ContactForm() {
  return (
    <section className="contactForm">
      <h4>Contact form</h4>
      <div className="container">
        <div className="left">
          <h2>Drop Us a Line</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form action="">
            <div>
              <div>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Your Email" />
              </div>
            </div>

            <div>
              <div>
                <input type="text" placeholder="Your Phone" />
              </div>
              <div>
                <input type="text" placeholder="Subject" />
              </div>
            </div>

            <div>
              <textarea name="" id="" placeholder="Message"></textarea>
            </div>
            <div className="btn">
                <button type="submit">Send message</button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src={formImg} alt="form Img" />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
