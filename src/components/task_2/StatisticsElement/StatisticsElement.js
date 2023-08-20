import PropTypes from 'prop-types';
import { Element, Percentage } from './StatisticsElement.styled';

export const StatisticsLi = ({ stats: { id, label, percentage, bgc } }) => {
  return (
    <Element className="item" key={id} style={{ backgroundColor: bgc }}>
      <span className="label">{label}</span>
      <Percentage className="percentage">{percentage}%</Percentage>
    </Element>
  );
};

StatisticsLi.propTypes = {
  stats: PropTypes.shape ({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}