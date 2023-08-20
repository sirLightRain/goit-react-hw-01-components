import { Card, Status, Foto, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  const { avatar, name, isOnline, id } = friends;
  return (
    <Card className="item" key={id}>
      <Status className="status" isOnline={isOnline}></Status>
      <Foto className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Card>
  );
};
