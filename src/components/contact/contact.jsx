// Imports
import React from "react";
import "./contact.css";
import './contactRespon.css'
import ContactHelp from "./contactHelp/contactHelp";
import ContactForm from "./contactForm/contactForm";


import { Link } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

const addressesData =[
    {
        "id": 1,
        "title": "Office",
        "address": "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
        "phone": "(123) 456-7890",
        "Email": "moatazzanwarr@gmail.com"
    },
    {
        "id": 2,
        "title": "Studio",
        "address": "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
        "phone": "(123) 456-7890",
        "Email": "moatazzanwarr@gmail.com"
    },
    {
        "id": 3,
        "title": "Shop",
        "address": "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
        "phone": "(123) 456-7890",
        "Email": "moatazzanwarr@gmail.com"
    }
]


function Contact() {
  return (
    <section className="contact">
      <div className="bar">
        <ul>
          <li>
            <Link to="#">
              <icons.HomeIcon className="i" />
              Home
            </Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Pages</Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>

      <ContactHelp />

      <div className="map">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&height=500&hl=en&q=2880 Broadway, New York&t=&z=13&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>
      </div>

      <div className="addresses">
        {
            addressesData.map((item,index)=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.address}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Email: {item.Email}</p>
                    <Link to="#"><icons.LocationOnIcon className="i"/>View map</Link>
                </div>
            ))
        }
      </div>

      <ContactForm/>

    </section>
  );
}

export default Contact;
