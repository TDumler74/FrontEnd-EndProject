import { RootState } from '../../app/store';
import Cocktail from './types/Cocktail';
import CocktailDto from './types/CocktailDto';

export async function getAll(): Promise<{ cocktails: Cocktail[] }> {
	const res = await fetch(
		'https://tdumler74.github.io/cocktails-fackApi/cocktails.json'
	);
	return res.json();
}

export const selectDrinks = (state: RootState): Cocktail[] =>
	state.cocktails.cocktails;
export const selectInstruction = (state: RootState): Cocktail | undefined =>
	state.cocktails.toSwitch;
