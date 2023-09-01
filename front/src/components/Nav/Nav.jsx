import styles from "../Nav/Nav.modules.css";
import SearchBar from "../SearchBar/SearchBar";
import NavLink from "../NavLink/NavLink"

function Nav({onSearch}) {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to={'/home'} >
          <span>Home</span>
        </NavLink>
        <NavLink to={'/favorites'}>
          <span>Favorites</span>
        </NavLink>
        <NavLink to={'/about'}>
          <span>About</span>
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
}

export default Nav;