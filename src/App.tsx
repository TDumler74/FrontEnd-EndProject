/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Home from './components/Home/Home';
import CocktailsList from './features/cocktails/CocktailsList';
import CocktailsCreate from './features/cocktails/CocktailsCreate';

function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="home" element={<Home />} />
					<Route path="cocktails" element={<CocktailsList />} />
					<Route path="new-cocktail" element={<CocktailsCreate />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
