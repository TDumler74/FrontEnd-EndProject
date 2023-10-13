import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import styles from './Layout.module.css';
export default function Layout(): JSX.Element {
	return (
		<>
			<header className={styles.header}></header>
			<div>
				<Navbar />
				<Outlet />
			</div>
			<div className={styles.container}>
				<h1 className={styles.h1}>Welcome to our site!</h1>
				<p className={styles.text}>
					This is final project of the frontend course. In this project we work
					with Redux toolkit, stylistic makeover is done via CSS. In our project
					we have created a page where you can view cocktail receptes. Have fun
					trying it out !!!
				</p>
				<img
					src="src\components\img\cocktails-wallpaper-preview.jpg"
					className={styles.img}
				/>
			</div>
			<footer className={styles.footerStyle}>
				<p>
					<b>Germany, Paderborn</b> © Tatjana Dumler, 2023
				</p>
			</footer>
		</>
	);
}
