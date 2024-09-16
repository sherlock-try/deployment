import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to our hospital, where compassion meets cutting-edge medical care. For decades, we have been dedicated to providing comprehensive healthcare services to our community. Our team of skilled professionals is committed to delivering personalized care with empathy and excellence.
          </p>
          {/* <p>In 2024, we continue our tradition of excellence in healthcare.</p>
          <p>We are currently working on a groundbreaking MERN Stack project to enhance patient care through technology, ensuring that our patients receive the best possible experience from consultation to recovery.</p> */}
          <p>
            Our hospital offers a wide range of services, from routine check-ups to specialized treatments, all designed to meet the unique needs of our patients. We believe in the power of innovation and are constantly evolving to integrate the latest medical advancements into our practice.
          </p>
          <p>Our mission is to care for our patients with the utmost respect, dignity, and professionalism.</p>
          <p>At our hospital, we believe that healthcare should be accessible, affordable, and centered around the patient. We are here to support you every step of the way.</p>
          <p>We are all in 2024!</p>
          <p>MERN Stack Project:</p>
             <p>This highlights the hospital's innovative approach to healthcare, emphasizing the integration of technology to improve patient experiences.</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;