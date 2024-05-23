import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
  const [liked, setLiked] = useState(false);
  return (
    <View className="h-20 flex-row items-center justify-around">
      {liked ? (
        <MaterialIcons name="favorite" size={24} color="red" />
      ) : (
        <MaterialIcons name="favorite" size={24} color="gray" />
      )}
      <TouchableOpacity>
        <Text className="bg-green-800 text-white font-semibold px-20 py-3 rounded-xl text-lg">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
