import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CocktailsState from './types/CocktailsState';
import * as api from './api';
import Cocktail from './types/Cocktail';
import CocktailDto from './types/CocktailDto';

const initialState: CocktailsState = {
	cocktails: [],
	filtered: [],
};

export const loadDrinks = createAsyncThunk('cocktails/loadDrinks', () =>
	api.getAll()
);
export const loadCategory = createAsyncThunk('coctails/loadCategory', () =>
	api.getByCategory()
);

export const createCocktail = createAsyncThunk(
	'cocktails/createCocktail',
	(cocktail: CocktailDto) => api.createCocktail(cocktail)
);

export const cocktailSlice = createSlice({
	name: 'cocktails',
	initialState,
	reducers: {
		loadInstruction: (state, action: PayloadAction<Cocktail>) => {
			state.toSwitch = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loadDrinks.fulfilled, (state, action) => {
			state.cocktails = action.payload.cocktails;
		});
		//.addCase(loadCategory.fulfilled, (state, action)=>{
		//	state.cocktails = action.payload.cocktails;
		//})
	},
});

export default cocktailSlice.reducer;
