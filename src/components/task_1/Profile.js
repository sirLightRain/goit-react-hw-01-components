import PropTypes from 'prop-types';

import { Description } from './ProfileDescription';
import { Stats } from './ProfileStats';

export const Profile = ({
  info: { username, tag, avatar, location, stats },
}) => {
  return (
    <div className="Profile">
      <Description avatar={avatar} username={username} tag={tag} location={location}/>

      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  info: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
