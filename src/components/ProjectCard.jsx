import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import { motion } from "framer-motion";
const ProjectCard = (props) => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  return (
    <div className='project-card'>
      <div>
        <img src={props.img} alt={props.name} className='project-img' />
        <h2 className='project-title'>{props.name}</h2>
        <p className='project-description'>{props.description}</p>
      </div>

      <div className='project-links'>
        {props.source && (
          <div>
            {props.source && <a href={props.source} className='github'>
              <FaGithub />
            </a>}

            {props.preview && <a href={props.preview}>
              <FaExternalLinkAlt />
            </a>}
          </div>
        )}
      </div>

      {/* <div className="project-tags">
        <div className="project-tag">
          {projects.stack.map((project, index) => (
            <p key={index}>hello</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string,
  source: PropTypes.string,
  preview: PropTypes.string,
};

export default ProjectCard;
