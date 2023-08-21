import PropTypes from 'prop-types';
import { Element, Percentage } from './StatisticsElement.styled';

export const StatisticsLi = ({ stats: { label, percentage, bgc } }) => {
  return (
    <Element style={{ backgroundColor: bgc }}>
      <span>{label}</span>
      <Percentage>{percentage}%</Percentage>
    </Element>
  );
};

StatisticsLi.propTypes = {
  stats: PropTypes.shape ({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}