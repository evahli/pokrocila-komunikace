import './style.css';
import { useState } from 'react';

export const Product = ({ image, name, price, onAddToCart }) => {
  const [count, setCount] = useState(0);
  const handlePurchase = () => {
    onAddToCart(price)
  }


  return (
    <div onClick={() => setCount(count + 1)} className="product">
      <img onClick={handlePurchase} src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč <br /> {count}ks
      </div>
    </div>
  );
};
