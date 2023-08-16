import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friendList }) => {
  return (
    <ul className="friend-list">
      {friendList.map(friend => (
        <FriendListItem key={friend.id} friendList={friend}/>
      ))}
    </ul>
  );
};
