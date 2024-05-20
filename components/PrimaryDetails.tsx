import { View, Text ,Image} from 'react-native';
import React, { useState } from 'react';
import { star } from '@/constants/images';

const PrimaryDetails = () => {
  const [primaryData, setPrimaryData] = useState({
    brand: 'ekero',
    price: 501,
    offer : 45,
    rating : 4.9,
    numberOfReview : 356,
    productTagline : 'A minimalistic chair with a reversible black cushion privides soft support for your back and has two sides to wear'
  });

  return (
    <View className='p-4'>
      <Text className='uppercase text-lg text-gray-700'>{primaryData.brand}</Text>
      <View className='flex-row gap-3'>
        <Text className='font-semibold text-3xl'>${primaryData.price - (primaryData.price*primaryData.offer / 100)}</Text>
        <Text>${primaryData.price}</Text>
        <Text className='bg-red-700 text-white px-2 h-5 rounded-tl-md rounded-br-md'>{primaryData.offer}% OFF</Text>
      </View>
      <View className='py-3 flex-row gap-2'>
        <Image source={star} className='h-5 w-5' />
        <Text className='text-slate-700'>{primaryData.rating} ({primaryData.numberOfReview})</Text>
      </View>
      <View>
        <Text className='text-lg '>{primaryData.productTagline}</Text>
      </View>
    </View>
  );
};

export default PrimaryDetails;