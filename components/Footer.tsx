import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked)
  }
  return (
    <View className="h-20 flex-row items-center justify-around">
      <TouchableOpacity onPress={handleLike}>
      {liked ? (
        <MaterialIcons name="favorite" size={32} color="red" />
      ) : (
        <MaterialIcons name="favorite" size={32} color="gray" />
      )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="bg-green-800 text-white font-semibold px-20 py-3 rounded-xl text-lg">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
