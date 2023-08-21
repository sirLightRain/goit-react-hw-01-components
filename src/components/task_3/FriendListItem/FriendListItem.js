import { Card, Status, Foto, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';


export const FriendListItem = ({ friends }) => {
  const { avatar, name, isOnline } = friends;
  return (
    <Card>
      <Status isOnline={isOnline}></Status>
      <Foto src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Card>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};