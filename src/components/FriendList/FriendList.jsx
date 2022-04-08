import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(item => (
          <FriendListItem key={item.id} list={item} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
