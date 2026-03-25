// Imports
import React, { useState } from "react";
import "./contactForm.css";

// Images
import formImg from "../../../assets/images/contactForm.png";

function ContactForm() {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Here you can handle form submission, e.g., send formData to an API or display it

    console.log(formData);
  }
  function handleName(e) {
    const { value } = e.target;
    setName(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      name: value,
    }));
  }
  function handleEmail(e) {
    const { value } = e.target;
    setEmail(e.target.value);
    setFormData((prevData) => ({ ...prevData, email: value }));
  }
  function handlePhone(e) {
    const { value } = e.target;
    setPhone(e.target.value);
    setFormData((prevData) => ({ ...prevData, phone: Number(value) }));
  }
  function handleSubject(e) {
    const { value } = e.target;
    setSubject(e.target.value);
    setFormData((prevData) => ({ ...prevData, subject: value }));
  }
  function handleMessage(e) {
    const { value } = e.target;
    setMessage(e.target.value);
    setFormData((prevData) => ({ ...prevData, message: value }));
  }

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
          <form action="" onSubmit={handleSubmit}>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
            </div>

            <div>
              <div>
                <input
                  type="text"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={handlePhone}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={handleSubject}
                />
              </div>
            </div>

            <div>
              <textarea
                name=""
                id=""
                placeholder="Message"
                value={message}
                onChange={handleMessage}
              ></textarea>
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
