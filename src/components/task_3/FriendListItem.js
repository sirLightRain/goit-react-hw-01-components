export const FriendListItem = ({ friendList }) => {
  const { avatar, name, isOnline, id } = friendList;
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}isOnline</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
