import PropTypes from 'prop-types';

export const StatisticsLi = ({ stats: { id, label, percentage } }) => {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticsLi.propTypes = {
  stats: PropTypes.shape ({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}