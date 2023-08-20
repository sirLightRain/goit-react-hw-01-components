import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Wrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friends={friend} />
      ))}
    </Wrapper>
  );
};
