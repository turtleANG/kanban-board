import User from '../user/User';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerLogo}>Awesome Kanban Board</div>
      <User />
    </header>
  );
}

export default Header;