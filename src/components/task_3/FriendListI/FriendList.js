import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Wrapper } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friends={friend} />
      ))}
    </Wrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};