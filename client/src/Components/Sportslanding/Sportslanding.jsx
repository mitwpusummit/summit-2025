import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

import "./Sportslanding.css";

const SportsCard = ({ title, subtitle, link }) => {
  return (
    <div className="sports-card">
      <h3>{title}</h3>
      <p className="subtle-subtitle">{subtitle}</p>
      <Link to={link}>Register</Link>
    </div>
  );
};

const Sportslanding = () => {
  return (
    <div>
      <Navbar />
      <div className="sports-landing-container">
        <h2>SELECT A SPORT</h2>
        <h2>Please call the registration team before registering to avoid problems!</h2>
        <div className="sports-list">
          {/* <SportsCard
            title="Cricket (M)"
            subtitle="Rs. 21,000/-"
            link="/register/Cricket(M)"
          /> */}
         {/* <SportsCard
            title="Football Men"
            subtitle="Rs. 7,200/-"
            link="/register/Football(M)"
          /> */}
          <SportsCard
            title="Football Women"
            subtitle="Rs. 3,500/-"
            link="/register/Football(W)"
          />
          <SportsCard
            title="Basketball Men"
            subtitle="Rs. 2,800/-"
            link="/register/Basketball(M)"
          />
          <SportsCard
            title="Basketball Women"
            subtitle="Rs. 2,000/-"
            link="/register/Basketball(W)"
          />
          <SportsCard
            title="Volleyball Men"
            subtitle="Rs. 2,500/-"
            link="/register/Volleyball(M)"
          />
          <SportsCard
            title="Volleyball Women"
            subtitle="Rs. 1,800/-"
            link="/register/Volleyball(W)"
          />
          {/* <SportsCard
            title="Kabaddi"
            subtitle="Rs. 1,500/-"
            link="/register/Kabaddi"
          /> */}
{/*           <SportsCard
            title="Badminton Men"
            subtitle="Rs. 1,800/-"
            link="/register/Badminton(M)"
          /> */}
          <SportsCard
            title="Badminton Women"
            subtitle="Rs. 1,700/-"
            link="/register/Badminton(W)"
          />
          <SportsCard
            title="Table Tennis Men"
            subtitle="Rs. 2,000/-"
            link="/register/TableTennis(M)"
          />
          <SportsCard
            title="Table Tennis Women"
            subtitle="Rs. 1,600/-"
            link="/register/TableTennis(W)"
          />
          <SportsCard
            title="Chess Men"
            subtitle="Rs. 1,800/-"
            link="/register/Chess(M)"
          />
          <SportsCard
            title="Chess Women"
            subtitle="Rs. 1,800/-"
            link="/register/Chess(W)"
          />
          <SportsCard
            title="Esports BGMI"
            subtitle="Rs. 500/- Per team"
            link="/register/Esports_BGMI"
          />
          <SportsCard
            title="Esports Valorant"
            subtitle="Rs. 500/- Per team"
            link="/register/Esports_Valorant"
          />
          <SportsCard
            title="Esports EA FIFA"
            subtitle="Rs. 200/- Per team"
            link="/register/Esports_FIFA"
          />
        </div>
      </div>
    </div>
  );
};

export default Sportslanding;
