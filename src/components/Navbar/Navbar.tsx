import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
	return (
		<nav className={styles.container}>
			<div className={styles.leftBox}>
				<Link to="/">
					<img
						className={styles.logoStyle}
						src="src\components\img\logo.jpeg"
						alt="logo"
					/>
				</Link>
				<NavLink className={styles.link} to="/">
					Home
				</NavLink>
				<NavLink className={styles.link} to="cocktails">
					Cocktails
				</NavLink>
			</div>
			<NavLink className={styles.rightBox} to="auth">
				Sign In
			</NavLink>
		</nav>
	);
}
