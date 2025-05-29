import React from 'react';
import me from '../assets/me.jpeg';

function About() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundColor: '#212529', 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff', 
      }}
    >
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4" style={{ fontSize: '3rem' }}>About Me</h2>
        <div
          className="mx-auto mb-4"
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#198754',
            borderRadius: '2px',
          }}
        ></div>

        <div className="row align-items-center">
          <div className="col-md-12 d-flex justify-content-center mb-5">
            <div className="d-flex align-items-center" style={{ gap: '2rem' }}>
              <img
                src={me}
                className="img-fluid"
                alt="About Me"
                style={{
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '10px', 
                }}
              />
              <div style={{ maxWidth: '600px' }}>
                <h5 className="fw-semibold" style={{ fontSize: '1.8rem' }}>Who I am</h5>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                  Hi, I'm Sandhya — a front-end developer with a strong passion for creating responsive, accessible, and visually engaging web applications. I specialize in the MERN stack and have experience building full-featured projects ranging from review platforms to blockchain-integrated apps. With a background in computer applications and a keen interest in modern technologies, I strive to write clean, efficient code and continuously learn new tools and frameworks. I'm currently expanding my expertise through a PG Diploma in Blockchain Technology and enjoy transforming ideas into meaningful digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
