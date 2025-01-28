import React from "react";
import "./message.css";
import Footer from "../Components/Footer/Footer";
import e1 from "../assets/images/exegrp.png"; // Ensure this path is correct

const Message = () => {
  return (
    <div>
      <div className="msg-div">
        <h2 className="msg-title">Executive President's Message</h2>
      </div>
      <div className="image-container">
        <img src={e1} alt="Executive President's Message" className="exe-image" loading="lazy" />
      </div>
      <Footer />
    </div>
  );
};

export default Message;