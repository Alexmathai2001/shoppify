import { View, Text, Image } from 'react-native'
import React from 'react'
import chair1 from '@/constants/images'

const ImageViewer = () => {
  return (
    <View className='w-full h-[400px] p-10 relative'>

      <Text className='bg-[#E44A4A] text-white w-28 px-3 py-2 font-semibold absolute mt-8'>Best Seller</Text>
      <Image source={chair1} resizeMode='contain' className='w-full h-full'/>
    </View>
  )
}

export default ImageViewer