import React from 'react';
import trip from '../assets/trip.jpg';
import book from '../assets/book.jpg';
import certi from '../assets/certificate.jpg';
import employee from '../assets/employee.jpg';
import placement from '../assets/placement.jpg';
import farm from '../assets/farm.jpg';

function Projects() {
  const projects = [
    {
      name: 'Placement cell website',
      githubLink: 'https://github.com/yourusername/project1',
      img: placement,
    },
    {
      name: 'Triptales',
      githubLink: 'https://github.com/sandhyac18091/TripTales',
      img: trip,
    },
    {
      name: 'Bookify',
      githubLink: 'https://github.com/sandhyac18091/Bokify',
      img: book,
    },
    {
      name: 'Certifyhub',
      githubLink: 'https://github.com/sandhyac18091/Certify_hub',
      img: certi,
    },
    {
      name: 'Employeeease',
      githubLink: 'https://github.com/sandhyac18091/EmployeeEase',
      img: employee,
    },
    {
      name: 'Farmington',
      githubLink: 'https://github.com/yourusername/project6',
      img: farm,
    },
  ];

  return (
    <div className="bg-black text-light py-5" style={{ fontFamily: "'Arial', sans-serif" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-5" key={index}>
              <div
                className="card shadow-lg border-0"
                style={{
                  width: '100%',
                  maxWidth: '460px', 
                  transition: 'transform 0.3s ease-in-out',
                  cursor: 'pointer',
                  borderRadius: '15px',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt={project.name}
                    style={{
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                </a>
                <div 
                  className="card-body" 
                  style={{
                    padding: '25px',
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    right: '15px',
                    background: 'rgba(0, 0, 0, 0.5)', 
                    borderRadius: '10px',
                  }}
                >
                  <h5 className="card-title fs-5">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
