import PropTypes from 'prop-types';
import RenderItem from 'components/RenderItem/RenderItem';

const FriendListItem = ({ list: { id, avatar, name, isOnline } }) => {
  return <RenderItem id={id} avatar={avatar} name={name} isOnline={isOnline} />;
  // <li key={id} className={s.item}>
  //   <Status isOnline={isOnline} />
  //   <img className="avatar" src={avatar} alt={name} width="48" />
  //   <p className="name">{name}</p>
  // </li>
};

export default FriendListItem;

FriendListItem.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
