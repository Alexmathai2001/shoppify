import { View, Text, Image } from "react-native";
import React from "react";
import {chair1} from "@/constants/images";

const ImageSelector = () => {
  return (
    <View className="w-full flex-row justify-center">
      <View className="flex-row gap-4">
        <View className=" border-2 rounded-xl border-black p-3">
          <Image source={chair1} className="h-12 w-12" />
        </View>
        <View className=" border-2 rounded-xl border-black p-3">
          <Image source={chair1} className="h-12 w-12" />
        </View>
        <View className=" border-2 rounded-xl border-black p-3">
          <Image source={chair1} className="h-12 w-12" />
        </View>
      </View>
    </View>
  );
};

export default ImageSelector;
