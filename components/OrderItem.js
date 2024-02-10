import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";

export default function OrderItem({ item }) {
  const { price, title } = item;
  return (
    <View
      style={tw`flex flex-row border-b py-3 border-gray-400 mb-1 justify-between items-center px-4 mx-2`}
    >
      <Text style={tw`font-medium`}>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
}
