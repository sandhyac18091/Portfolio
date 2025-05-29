import React from 'react';

function Skills() {
  return (
    <>
      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
        Skilled in full-stack web development using modern tools like HTML, CSS, JavaScript, React, Node.js, and Firebase. I build responsive, interactive, and scalable applications with efficient deployment using GitHub, MongoDB, and Docker.
        </p>

        <div className="skills-grid">
          {[
            { name: 'HTML', img: 'https://img.icons8.com/color/48/html-5--v1.png' },
            { name: 'CSS', img: 'https://img.icons8.com/color/48/css3.png' },
            { name: 'EXPRESS', img: 'https://img.icons8.com/ios/50/express-js.png' },
            { name: 'JAVASCRIPT', img: 'https://img.icons8.com/color/48/javascript--v1.png' },
            { name: 'REACT JS', img: 'https://img.icons8.com/color/48/react-native.png' },
            { name: 'GITHUB', img: 'https://img.icons8.com/ios-glyphs/48/github.png' },
            { name: 'NODE JS', img: 'https://img.icons8.com/color/48/nodejs.png' },
            { name: 'TAILWIND', img: 'https://img.icons8.com/color/48/tailwind_css.png' },
            { name: 'MONGODB', img: 'https://img.icons8.com/color/48/mongodb.png' },
            { name: 'DOCKERS', img: 'https://img.icons8.com/color/48/docker.png' },
          ].map((skill, i) => (
            <div className="skill-card" key={i}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: #111111;
          color: #fff;
          padding: 60px 20px;
          text-align: center;
        }

        .skills-title {
          font-size: 36px;
          color: #f7c400;
          margin-bottom: 20px;
        }

        .skills-description {
          font-size: 16px;
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.6;
          color: #ccc;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-card {
          background-color: #1e1e1e;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
        }

        .skill-card img {
          width: 48px;
          height: 48px;
          margin-bottom: 10px;
        }

        .skill-card p {
          margin: 0;
          color: #ffffff;
          font-weight: bold;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

export default Skills;
