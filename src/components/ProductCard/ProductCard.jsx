import styles from './ProductCard.module.scss';

const ProductCard = () => {
	return (
		<>
			<div className={styles.card}>
				{/* Link to individual product when clicking on card */}
				<div className={styles.card__title}>{example.title}</div>
				<div className={styles.card__image}>{example.image}</div>
				<div className={styles.card__price}>{example.price}</div>
				// Add a favourite button toggle
				<div className={styles.card__favourite}> Favourite </div>
			</div>
		</>
	);
};

export default ProductCard;
