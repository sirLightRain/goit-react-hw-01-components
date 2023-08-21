import PropTypes from 'prop-types';
import { StatisticsLi } from '../StatisticsElement/StatisticsElement';

import { Wrapper, Title, ElementWrapper } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <Wrapper>
        {title && <Title>{title}</Title>}

        <ElementWrapper>
          {stats.map(data => (
            <StatisticsLi key={data.id} stats={data} />
          ))}
        </ElementWrapper>
      </Wrapper>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
