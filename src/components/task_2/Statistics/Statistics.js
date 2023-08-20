import PropTypes from 'prop-types';
import { StatisticsLi } from '../StatisticsElement/StatisticsElement';

import { Wrapper, Title, ElementWrapper } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <Wrapper>
        {title && <Title className="title">{title}</Title>}

        <ElementWrapper className="stat-list">
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
  stats: PropTypes.array,
};
