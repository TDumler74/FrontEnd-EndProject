import styles from './Home.module.css';

export default function Home(): JSX.Element {
	return (
		<div>
			<div className={styles.container}>
				<div>
					<h1 className={styles.title}>Cocktails</h1>
					<p className={styles.p}>
						A cocktail done right can really show your guests that you care.
					</p>
				</div>
				<div className={styles.img}>
					<img src="src\components\img\Gallery-139.jpg" />
				</div>
			</div>
		</div>
	);
}
