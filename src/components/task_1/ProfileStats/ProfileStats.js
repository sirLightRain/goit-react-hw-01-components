import PropTypes from 'prop-types';
import { ListWrapper, ItemWrapper, Reactions } from './ProfileStats.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <ListWrapper className="stats">
      <ItemWrapper>
        <span className="label">Followers</span>
        <Reactions className="quantity">{followers}</Reactions>
      </ItemWrapper>
      <ItemWrapper>
        <span className="label">Views</span>
        <Reactions className="quantity">{views}</Reactions>
      </ItemWrapper>
      <ItemWrapper>
        <span className="label">Likes</span>
        <Reactions className="quantity">{likes}</Reactions>
      </ItemWrapper>
    </ListWrapper>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
