import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = (friends) => {
  return (
    <ul className={s.friendList}>
      {friends.friends.map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
