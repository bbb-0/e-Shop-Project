import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/NavBar/NavBar';
import ProductList from './containers/ProductList/ProductList';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/favourites" element={<Favourites />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
