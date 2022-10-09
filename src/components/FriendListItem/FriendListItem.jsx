import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={css.friendItem}>
      {isOnline 
      ? (<span className={`${css.status} ${css.online}`}></span>)
      :(<span className={`${css.status} ${css.offline}`}></span>)}
      <img className={css.avatar} src={avatar} alt={name} 
      />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}