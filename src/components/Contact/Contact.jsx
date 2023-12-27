import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="paddings innerWidth flexCenter c-container">
      {/* left side */}
      <div className="flexColStart c-left">
        <span className="orangeText">Our Contacts</span>
        <span className="primaryText">Easy to Contact us</span>
        <span className="secondaryText">We always ready to help by providing the best services for you. We believe a good balance to live can make your life better.</span>
      </div>
      {/* right side */}
      <div className="c-right">
        <div className="image-container">
          <img src="./contact.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
