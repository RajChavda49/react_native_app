import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <>
      <View style={tw`flex-row mb-3 self-center p-5`}>
        <HeaderButton
          text="Delivery"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <HeaderButton
          text="Pickup"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
    </>
  );
}

const HeaderButton = ({
  text,
  activeTab,
  setActiveTab,
}) => (
  <>
    <TouchableOpacity
      style={tw`${
        activeTab === text ? "bg-black" : "bg-white"
      } px-5 py-2 rounded-2xl`}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={tw`${
          activeTab === text ? "text-white" : "text-black"
        } font-bold text-base`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </>
);
