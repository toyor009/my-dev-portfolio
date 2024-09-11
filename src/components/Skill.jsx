import PropTypes from 'prop-types';

const Skill = (props) => {
  return (
    <div className='skill'>
      <img
        src={`/skills/${props.skill.toLowerCase()}.svg`}
        alt={props.skill}
        title={props.skill}
        className='skill-img'
      />
    </div>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;
