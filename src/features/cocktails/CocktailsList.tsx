import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadDrinks } from './cocktailsSlice';
import styles from './CocktailsList.module.css';
import { selectDrinks } from './selectors';
import { getAll } from './api';

export default function CocktailsList(): JSX.Element {
	const cocktails = useAppSelector(selectDrinks);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadDrinks());
	}, [dispatch]);

	return (
		<div>
			<div className={styles.cocktails}>
				<img className={styles.backgroundImage} />
				<h1>Cocktail card</h1>
				<ul>
					{cocktails.map((cocktail) => (
						<li key={cocktail.strDrink}>
							{cocktail.strCategory}
							<br />
							<div>{cocktail.strDrink}</div>
							<div>{cocktail.strInstructions}</div>
							<img src={cocktail.strDrinkThumb} className={styles.img} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
