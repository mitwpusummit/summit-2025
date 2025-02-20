import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const { state } = useLocation();
  const collegeDetailsArray = state ? state.selectedSportDetails : [];

  // State to track the expanded college (if any)
  const [expandedCollege, setExpandedCollege] = useState(null);

  const handleTileClick = (collegeName) => {
    setExpandedCollege((prevCollege) =>
      prevCollege === collegeName ? null : collegeName
    );
  };

  return (
    <div className="result-frame">
      <div className="Result-body">
        <h1 className="result-heading">Results</h1>

        {collegeDetailsArray.length > 0 && (
          <div className="sports-heading">
            <h2>{collegeDetailsArray[0].sportsConfirm}</h2>
          </div>
        )}

        <div className="college-tiles">
          {collegeDetailsArray.map((college, index) => (
            <div
              key={index}
              className={`college-tile ${
                expandedCollege === college.collegeName ? "expanded" : ""
              }`}
              onClick={() => handleTileClick(college.collegeName)}
            >
              <h2>{college.collegeName}</h2>

              {/* Expanded Details */}
              {expandedCollege === college.collegeName && (
                <div className="expanded-details">
                  <p>
                    <strong>City:</strong> {college.collegeCity}
                  </p>
                  <p>
                    <strong>State:</strong> {college.collegeState}
                  </p>
                  <p>
                    <strong>Type:</strong> {college.collegeType}
                  </p>
                  <p>
                    <strong>Accommodation:</strong> {college.accommodation}
                  </p>
                  <p>
                    <strong>Food Provided:</strong> {college.food}
                  </p>

                  <h3>Captain Details</h3>
                  <p>
                    <strong>Name:</strong> {college.captainName}
                  </p>
                  <p>
                    <strong>Email:</strong> {college.captainMail}
                  </p>
                  <p>
                    <strong>Phone:</strong> {college.captainPhone}
                  </p>

                  <h3>Vice Captain Details</h3>
                  <p>
                    <strong>Name:</strong> {college.viceCaptainName}
                  </p>
                  <p>
                    <strong>Phone:</strong> {college.viceCaptainNumber}
                  </p>

                  <h3>Sports Director Details</h3>
                  <p>
                    <strong>Name:</strong> {college.sportsDirectorName}
                  </p>
                  <p>
                    <strong>Email:</strong> {college.sportsDirectorEmail}
                  </p>
                  <p>
                    <strong>Phone:</strong> {college.sportsDirectorNumber}
                  </p>

                  <h3>Other Details</h3>
                  <p>
                    <strong>Sports Head:</strong> {college.sportsHead}
                  </p>
                  <p>
                    <strong>Transaction ID:</strong> {college.transactionId}
                  </p>

                  <h3>Players</h3>
                  <ul>
                    {[...Array(16).keys()].map((i) => {
                      const playerName = college[`playerName${i + 1}`];
                      const playerEmail = college[`playerEmail${i + 1}`];
                      const playerPhone = college[`playerPhone${i + 1}`];

                      return playerName ? (
                        <li key={i}>
                          <p>
                            <strong>Player {i + 1}:</strong>
                          </p>
                          <p>
                            <strong>Name:</strong> {playerName}
                          </p>
                          <p>
                            <strong>Email:</strong> {playerEmail}
                          </p>
                          <p>
                            <strong>Phone:</strong> {playerPhone}
                          </p>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
