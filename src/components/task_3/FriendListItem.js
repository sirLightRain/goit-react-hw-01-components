export const FriendListItem = ({ friends }) => {
  const { avatar, name, isOnline, id } = friends;
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}isOnline ?</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
