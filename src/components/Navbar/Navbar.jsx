import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<NavLink to="/" className={styles.navbar__logo}>
				<img
					src={
						{
							/* Logo */
						}
					}
					alt="logo"
				/>
			</NavLink>
			<ul className={styles.navbar__links}>
				<li>
					<NavLink to="/products" className={styles.navbar__link}>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink to="/favourites" className={styles.navbar__link}>
						Favourites
					</NavLink>
				</li>
				<li>
					<NavLink to="/cart" className={styles.navbar__link}>
						<img src={cartImage} alt="cart" />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
