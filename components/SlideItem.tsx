import { View, Text, Image } from "react-native";
import React from "react";
import { star } from "@/constants/images";

const SlideItem = ({ item }) => {
  return (
    <View className="bg-white w-52 my-4 items-center py-4 rounded-xl mx-4">
      <View>
        <View className="relative">
          <Image
            source={item.image}
            className="h-48 w-48 "
            resizeMode="contain"
          ></Image>
          <Text className="bg-red-700 text-white px-2 h-5 rounded-tl-md rounded-br-md w-20 font-semibold absolute bottom-2 left-2">
            {item.discount}% OFF
          </Text>
        </View>
        <View className=" px-2">
          <Text className="uppercase text-gray-500">{item.brand}</Text>
          <Text className="text-xl font-semibold">
            $
            {(
              item.original_Price -
              (item.original_Price * item.discount) / 100
            ).toFixed(2)}
          </Text>
          <Text className="text-base line-through font-light">
            ${item.original_Price}
          </Text>
          <View className="py-3 flex-row gap-2">
            <Image source={star} className="h-5 w-5" />
            <Text className="text-slate-700">
              {item.rating} ({item.no_of_rating})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SlideItem;
