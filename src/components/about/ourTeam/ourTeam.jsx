// Imports
import React from "react";
import './ourTeam.css';
import OurTeamCard from "./ourTeamCard";
import { Link } from "react-router-dom";

// Images
import person_1 from '../../../assets/images/aboutPer_1.png'
import person_2 from '../../../assets/images/aboutPer_2.png'

const data =[
    {
        "id": 1,
        "src": person_1,
        "name": "H. Merinda",
        "tytle": "CEO & Co-Founder",
        "faceBook": "url",
        "x": "url",
        "instagram": "url",
        "youtube": "url",
    },
    {
        "id": 2,
        "src": person_2,
        "name": "Dilan Specter",
        "tytle": "Head Engineer",
        "faceBook": "url",
        "x": "url",
        "instagram": "url",
        "youtube": "url",
    }
]

function OurTeam() {
  return (
    <section className="ourTeam">
      <h1 className="mainTitle">Our Team</h1>
      <div className="container">
        <div className="text">
          <h5>Our Team</h5>
          <h2>Meet Our <br/>Expert Team</h2>
          <p>
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <p>
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <Link to="#">View All Members</Link>
        </div>
        <div className="cards">
            {
                data.map((item,index)=>(
                    <OurTeamCard
                        key={item.id}
                        src={item.src}
                        name={item.name}
                        tytle={item.tytle}
                        faceBook={item.faceBook}
                        x={item.x}
                        instagram={item.instagram}
                        youtube={item.youtube}
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
