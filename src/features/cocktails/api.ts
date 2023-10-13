import Cocktail from './types/Cocktail';
import CocktailDto from './types/CocktailDto';

export async function getAll(): Promise<{ cocktails: Cocktail[] }> {
	const res = await fetch(
		'https://tdumler74.github.io/cocktails-fackApi/cocktails.json'
	);
	return res.json();
}
export async function getByCategory(): Promise<{ cocktails: Cocktail[] }> {
	const res = await fetch(
		`https://tdumler74.github.io/cocktails-fackApi/cocktails.json/`
	);
	return res.json();
}

export async function createCocktail(cocktail: CocktailDto): Promise<Cocktail> {
	const res = await fetch(
		'https://tdumler74.github.io/cocktails-fackApi/cocktails.json ',
		{
			method: 'POST',
			// body: JSON.stringify(product) // сокращенная запись при условии совпадения ключей
			body: JSON.stringify({
				strDrink: cocktail.strDrink,
				strCategory: cocktail.strCategory,
				strAlcoholic: cocktail.strAlcoholic,
				strInstructions: cocktail.strInstructions,
				strDrinkThumb: cocktail.strDrinkThumb,
			}),
		}
	);
	// return res.json(); // вариант когда сервер присылает назад объект целиком
	const { idDrink } = await res.json(); // вариант когда сервер присылает только id назад
	return { ...cocktail, idDrink };
}
