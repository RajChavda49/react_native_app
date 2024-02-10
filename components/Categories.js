import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const items = [
  { image: require("../assets/images/shopping-bag.png"), text: "Pick-up" },
  { image: require("../assets/images/soft-drink.png"), text: "Soft-Drinks" },
  { image: require("../assets/images/bread.png"), text: "Bakery Items" },
  { image: require("../assets/images/fast-food.png"), text: "Fast Foods" },
  { image: require("../assets/images/deals.png"), text: "Deals" },
  { image: require("../assets/images/coffee.png"), text: "Coffee & Tea" },
  { image: require("../assets/images/desserts.png"), text: "Desserts" },
];
export default function Categories() {
  return (
    <View style={tw`bg-white mt-2 py-3`}>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.text}
        renderItem={(item) => (
          <View style={tw`items-center mr-5 ml-2 mt-2`} key={item.text}>
            <Image source={item.item.image} style={tw`w-14 h-14`} />
            <Text style={tw`font-bold`}>{item.item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
