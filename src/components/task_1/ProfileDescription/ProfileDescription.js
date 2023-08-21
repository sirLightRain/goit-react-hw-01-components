import PropTypes from 'prop-types';
import { Wrapper, AvatarWraper, Name } from './ProfileDescription.styled';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <Wrapper>
      <AvatarWraper>
        <img src={avatar} alt="User avatar" className="avatar" />
      </AvatarWraper>
      <Name>{username}</Name>
      <p>@{tag}</p>
      <p>{location}</p>
    </Wrapper>
  );
};

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
