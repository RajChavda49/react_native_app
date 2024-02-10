import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View style={tw`flex-row m-2 justify-between items-center`}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = ({ icon, text }) => (
  <View>
    <FontAwesome5 name={icon} size={25} style={tw` self-center`} color="gray" />
    <Text>{text}</Text>
  </View>
);
