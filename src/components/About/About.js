import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { about } from '../../portfolio';
import './About.css';

// Importing just the resume path
import resumePath from '../Skills/DimitriKwihangana.docx.pdf';

const About = () => {
  const { name, role, description, social } = about;

  const handleDownload = () => {
    // Initiates the download of the resume file
    window.location.href = resumePath;
  };

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {/* Button to trigger the download */}
        <button onClick={handleDownload} className='btn btn--outline'>
          Resume
        </button>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn/>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
