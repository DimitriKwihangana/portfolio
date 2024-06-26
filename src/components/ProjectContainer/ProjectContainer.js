import { FaGithub } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    {/* Add the image here */}
    {project.image && (
      <img src={project.image} alt={project.name} className='project__image' />
    )}

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={project.id} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <FaGithub />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <MdOutlineRocketLaunch />
      </a>
    )}
  </div>
);

export default ProjectContainer;
