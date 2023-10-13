import Cocktail from './Cocktail';

export default interface CocktailsState {
	cocktails: Cocktail[];
	filtered: Cocktail[];
	toSwitch?: Cocktail;
}
