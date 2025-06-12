import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../context/ShopContext.jsx";
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts,setLatestProducts]=useState([])
    // console.log(products);
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])

  return (
    <div className='my-10'>
      {/* You can now map over products here if needed */}
      <div className="text-center py-8 text-3xl">
        <Title text1={'Auracreasing'} text2={'Collections'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
        Not just trends — it’s your vibe, your mood, your statement. AuraKart brings Gen Z the freshest fits, bold drops, and must-have styles that speak your language. Whether you're dressing to impress or express, we've got the aura to match.
        </p>
      </div>


        {/*rendering products  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  );
};

export default LatestCollection;
