import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { dropdown } from "@/constants/images";

const ProductDescription = () => {

  const [dropdownstate,setDropdownstate] = useState(false)

  const handlePress = () =>{
    setDropdownstate(!dropdownstate)
  }

  return (
    <View className="p-4">
      <TouchableOpacity onPress={handlePress} className="flex-row justify-between items-center">
        <Text className="text-xl font-semibold">Product Description</Text>
        <Image source={dropdown} className={`w-4 h-4 ${dropdownstate ? 'rotate-180' : 'rotate-0'}`} />
        
      </TouchableOpacity>
      <Text className={`mt-3 ${dropdownstate ? 'block' : 'hidden'}`}>Choose a stylish dark color or brighten up your home with colorful sarongs. The EKERÖ armchair has a sleek and modern look with two sides that meet at the back – and a waist support for added comfort!</Text>

    </View>
  );
};

export default ProductDescription;
