import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { dropdown, sizeChart } from "@/constants/images";

const SizeDescription = () => {
  const [dropdownstate, setDropdownstate] = useState(false);
  const [details, setDetails] = useState({
    width: 10,
    depth: 1,
    height: 3,
    seatWidth: 3,
    seatDepth: 6,
    seatHeight: 8,
  });

  handlePress = () => {
    setDropdownstate(!dropdownstate);
  };
  return (
    <View className="p-4">
      <TouchableOpacity
        onPress={handlePress}
        className="flex-row justify-between items-center"
      >
        <Text className="text-xl font-semibold">Size</Text>
        <Image
          source={dropdown}
          className={`w-4 h-4 ${dropdownstate ? "rotate-180" : "rotate-0"}`}
        />
      </TouchableOpacity>
      <View className={`${dropdownstate ? 'block' : 'hidden'}`}>
        <View className="mt-3 border-b-[1px] border-gray-400 flex-row justify-between">
          <Text className="capitalize text-base">width</Text>
          <Text>{details.width} cm</Text>
        </View>
        <View className="mt-3 border-b-[1px] border-gray-400 flex-row justify-between">
          <Text className="capitalize text-base">depth</Text>
          <Text>{details.depth} cm</Text>
        </View>
        <View className="mt-3 border-b-[1px] border-gray-400 flex-row justify-between">
          <Text className="capitalize text-base">height</Text>
          <Text>{details.height} cm</Text>
        </View>
        <View className="mt-3 border-b-[1px] border-gray-400 flex-row justify-between">
          <Text className="capitalize text-base">seat width</Text>
          <Text>{details.seatWidth} cm</Text>
        </View>
        <View className="mt-3 border-b-[1px] border-gray-400 flex-row justify-between">
          <Text className="capitalize text-base">seat depth</Text>
          <Text>{details.seatDepth} cm</Text>
        </View>
        <View className="mt-3 border-b-[1px] border-gray-400 flex-row justify-between">
          <Text className="capitalize text-base">seat height</Text>
          <Text>{details.seatHeight} cm</Text>
        </View>
        <Image source={sizeChart} resizeMode="contain" className='w-full h-auto' />
      </View>
    </View>
  );
};

export default SizeDescription;
