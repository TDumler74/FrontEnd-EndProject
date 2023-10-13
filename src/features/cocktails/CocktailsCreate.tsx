import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createCocktail } from './cocktailsSlice';
import styles from './CocktailsCreate.module.css';

export default function CocktailsCreate(): JSX.Element {
	const [strDrink, setStrDrink] = useState<string>('');
	const [strAlcoholic, setStrAlcoholic] = useState<string>(' ');
	const [strCategory, setStrCategory] = useState<string>('');
	const [strInstructions, setStrInstructions] = useState<string>('');
	const [strDrinkThumb, setStrDrinkThumb] = useState<string>('');

	const [error, setError] = useState<string>('');

	const dispatch = useAppDispatch();
	function validateInputs(): boolean {
		if (strDrink.trim() === '') {
			setError('Title is not valid');
			return false;
		}
		if (strCategory.trim() === '') {
			setError('Category is not valid');
			return false;
		}
		if (strInstructions.trim() === '') {
			setError('Instruction is not valid');
			return false;
		}
		if (strDrinkThumb.trim() === '') {
			setError('Image is not valid');
			return false;
		}
		if (strAlcoholic.trim() === '') {
			setError('Price is not valid');
			return false;
		}
		return true;
	}
	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		if (validateInputs()) {
			dispatch(
				createCocktail({
					strDrink,
					strCategory,
					strAlcoholic,
					strDrinkThumb,
					strInstructions,
				}) // импорт createProduct должен быть из slice
			);
		}
	}

	return (
		<div className={styles.newDrinks}>
			<h1>Add new cocktail</h1>
			<select
				value={strCategory}
				onChange={(e) => setStrCategory(e.target.value)}
			>
				<option value="" disabled>
					type of drink
				</option>
				<option value="Drink">Drink</option>
				<option value="Shot">Shot</option>
				<option value="Cocktail">Cocktail</option>
			</select>
			<select
				value={strAlcoholic}
				onChange={(e) => setStrAlcoholic(e.target.value)}
			>
				<option value="" disabled>
					category
				</option>
				<option value="alcoholic">alcoholic</option>
				<option value="non-alcoholic">non-alcoholic</option>
			</select>
			<form onSubmit={handleSubmit}>
				{error && <p>{error}</p>}
				<input
					type="text"
					placeholder="title"
					value={strDrink}
					onChange={(e) => setStrDrink(e.target.value)}
				/>
				<input
					type="text"
					placeholder="description"
					value={strInstructions}
					onChange={(e) => setStrInstructions(e.target.value)}
				/>
			</form>
			<button type="submit">add</button>
		</div>
	);
}
