import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller); // ✅ fixed
    // console.log("Filtered Best Sellers:", bestProduct); // ✅ inside useEffect
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8">
        <Title text1={'INFINITE-AURA'} text2={'DEALS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          These are the pieces making waves and turning heads. Tried, loved, and added-to-cart by the trendsetters — if it’s here, it’s hot. Don’t miss out on the styles the vibe squad swears by.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
