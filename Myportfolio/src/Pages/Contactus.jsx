import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle, FaPhoneAlt } from 'react-icons/fa'; 

function Contact() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundColor: 'black',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff',
        padding: '60px 0',
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ fontSize: '3rem' }}>Connect with Me</h2>
        <div
          className="mx-auto mb-4"
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#198754',
            borderRadius: '2px',
          }}
        ></div>

        <div className="row text-center">
          <div className="col-12">
            <div className="d-flex justify-content-center gap-4">
              
              <a
                href="https://www.linkedin.com/in/sandhya-c-1a4382281/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '3rem', color: '#0077B5' }}
              >
                <FaLinkedin />
              </a>
              
              <a
                href="https://github.com/sandhyac18091"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '3rem', color: '#333' }}
              >
                <FaGithub />
              </a>
              
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '3rem', color: '#DB4437' }}
              >
                <FaGoogle />
              </a>
              
              <a
                href="tel:+1234567890"  
                style={{ fontSize: '3rem', color: '#28A745' }}
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
