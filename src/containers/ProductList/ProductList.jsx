import { useState } from 'react';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await fetch('firestore url');
		const data = await response.json();
		setProducts(data);
	};

	return (
		<>
			<div className={styles.productList}>
				{products.map((product) => {
					return <ProductCard key={product.id} productData={product} />;
				})}
			</div>
		</>
	);
};

export default ProductList;
