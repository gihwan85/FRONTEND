// src/components/ProductCard.jsx
import './ProductCard.css';

function ProductCard(props) {
    const {
        title,
        description,
        price,
        discount,
        originalPrice,
        brand,
        image,
    } = props;

    return (
        <div className="card">
            <img src={image} alt={title} className="product-img" />
            <div className="product-info">
                <h4 className="title">{title}</h4>
                <p className="desc">{description}</p>
                <div className="price-section">
                    {discount ? (
                        <>
                            <span className="discount">{discount}%</span>
                            <span className="price">{price.toLocaleString()}원</span>
                            <span className="original-price">{originalPrice.toLocaleString()}원</span>
                        </>
                    ) : (
                        <span className="price">{price.toLocaleString()}원</span>
                    )}
                </div>
                    <p className="brand">{brand}</p>
            </div>
        </div>
    );
}

export default ProductCard;
