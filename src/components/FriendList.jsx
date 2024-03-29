import style from './css/friendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          <span
            className={`${
              friend.isOnline ? style.statusIsOnline : style.statusOffline
            }`}
          ></span>
          <img
            className={style.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
