import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';


export const FriendList = ({ friends }) => {
  return(
<ul className="friend-list">
  {friends.map(({id, name, isOnline, avatar})=> (
    <FriendListItem
    key = {id}
    name = {name}
    isOnline={isOnline}
    avatar={avatar}
    />
  ))}
</ul>
)};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

