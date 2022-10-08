import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className="">
      
      <img src={avatar} alt={name} 
      />
      <p className="">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}