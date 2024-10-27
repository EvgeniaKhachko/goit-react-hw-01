import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
      <p className={`${isOnline ? s.online : s.offline}`}>{`${
        isOnline ? "Online" : "Offline"
      }`}</p>
    </li>
  );
};
export default FriendListItem;
