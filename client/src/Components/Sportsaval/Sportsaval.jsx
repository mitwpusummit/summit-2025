import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar.jsx";
import "./Sportsaval.css";

const SportsCard = ({ title, onSelectSport }) => {
  const handleClick = () => {
    onSelectSport(title);
  };

  return (
    <div className="sports-card" onClick={handleClick}>
      <h3>{title}</h3>
      <div>Register</div>
    </div>
  );
};

const Sportsaval = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSelectSport = async (sport) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        "https://api.sportssummit.info/summit/sport-details",
        { title: sport },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log("Sport details:", data);

      // Navigate to result page with data
      navigate("/admin/result", { state: { selectedSportDetails: data } });
    } catch (error) {
      console.error("Axios error:", error);
      setError("Error fetching sport details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="sports-landing-container">
        <h2>Select a Sport</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="sports-list">
          {[
            "Cricket(M)",
            "Football(M)",
            "Football(W)",
            "Basketball(M)",
            "Basketball(W)",
            "Volleyball(M)",
            "Volleyball(W)",
            "Kabaddi",
            "Badminton(M)",
            "Badminton(W)",
            "Table Tennis(M)",
            "Table Tennis(W)",
            "Chess(M)",
            "Chess(W)",
            "Esports_BGMI",
            "Esports_Valorant",
            "Esports_FIFA",
          ].map((sport) => (
            <SportsCard key={sport} title={sport} onSelectSport={handleSelectSport} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sportsaval;
