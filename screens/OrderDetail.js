import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import LottieView from "lottie-react-native";
import MenuItem from "../components/MenuItem";

export default function OrderDetail() {
  // const [lastOrder, setLastOrder] = useState({
  //   items,
  // });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const rounded = Math.round(total * 10) / 10;
  const totalUSD = rounded.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <View style={tw`bg-white h-full`}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <LottieView
        style={tw`h-52 self-center`}
        source={require("../assets/animations/chek-mark.json")}
        autoPlay
        loop={false}
      />
      <Text>
        Your order at {restaurantName} has been placed for $ {totalUSD}
      </Text>
      <MenuItem foods={items} hideCheckbox={true}  />
      <LottieView
        style={tw`h-52 self-center`}
        source={require("../assets/animations/cookibg.json")}
        autoPlay
      />
    </View>
  );
}
