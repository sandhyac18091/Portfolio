import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ChevronDown } from 'react-bootstrap-icons'; // install via `react-bootstrap-icons`
import myphoto from '../assets/SANDHYA.jpg';
import resume from '../assets/Resume.pdf';  

const HomePage = () => {
  const handleScroll = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="vh-100 d-flex align-items-center position-relative"
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'black',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="fw-bold display-4 text-white">Hi, I'm Sandhya C</h1>
              <p
                className="lead mt-3 text-white"
                style={{ fontFamily: "'Courier New', Courier, monospace " }}
              >
                Frontend Developer | React Enthusiast ⚛️
                <br />
                I design and build beautiful, responsive websites using modern tech.
              </p>
              <motion.div whileHover={{ scale: 1.1 }} className="mt-4">
                <Button
                  variant="outline-primary"
                  size="lg"
                  href={resume}
                  download="Sandhya_C_Resume.pdf"
                  style={{
                    borderColor: 'white',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          <Col md={6} className="text-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={myphoto}
                alt="Sandhya"
                roundedCircle
                fluid
                style={{ maxWidth: '350px', height: 'auto' }}
                className="shadow-lg"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      
      <motion.div
  whileHover={{ scale: 1.2 }}
  onClick={handleScroll}
  style={{
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
    color: 'white',
  }}
>
  <ChevronDown size={28} />
</motion.div>

    </div>
  );
};

export default HomePage;
