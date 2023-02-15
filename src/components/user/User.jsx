import { useState } from 'react'
import userAvatar from '../../assets/user-avatar.svg'
import arrowDown from '../../assets/arrowDown.svg'
import arrowUp from '../../assets/arrowUp.svg'
import css from './User.module.css';

const User = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleDropdownClick = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <>
      <button onClick={handleDropdownClick} className={css.userBlock}>
        <div className={css.user__avatar}>
          <img src={userAvatar} alt="avatar" />
        </div>
        <div className={css.dropdown__arrow}><img src={isDropdownVisible ? arrowUp : arrowDown} alt="arrow" /></div>
      </button>
      {isDropdownVisible && (
        <div className={css.dropdown__menu}>
          <div className={css.menu__item}>Profile</div>
          <div className={css.menu__item}>Log Out</div>
        </div>
      )}
    </>
  );
}

export default User;