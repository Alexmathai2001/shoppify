import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {data} from '../constants/chairsData'
import SlideItem from './SlideItem'

const FrequentlyBrought = () => {

  return (
    <View className="px-4">
      <TouchableOpacity
        className="flex-row justify-between items-center"
      >
        <Text className="text-lg font-medium">Frequently brought</Text>
        <Text className='text-green-700 font-semibold'>See More</Text>
      </TouchableOpacity>
      <View>
        <FlatList data={data} renderItem={({item}) => <SlideItem item={item}/>} horizontal pagingEnabled snapToAlignment='center'></FlatList>
      </View>
    </View>
  )
}

export default FrequentlyBrought