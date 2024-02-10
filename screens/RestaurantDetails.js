import {
  View,
  Text,
  ScrollView,
  StatusBar,
  RefreshControl,
} from "react-native";
import React from "react";
import About from "../components/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItem from "../components/MenuItem";
import tw from "tailwind-react-native-classnames";
import ViewCart from "../components/ViewCart";

const foods = [
  {
    id: 1,
    title: "Tandoori Chicken",
    description:
      "Amzaing Indian dish with tenderion chicken off the sizzies 🔥",
    price: "$ 19.20",
    img: "https://images.unsplash.com/photo-1567121938596-6d9d015d348b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Salad",
    description: "I have a salad at least once a day to keep my form.",
    price: "$ 10.20",
    img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Sandwich",
    description:
      " Every time I get hungry in the hustle and bustle of everyday life, I order a sandwich from a buffet and in this way I try to meet my nutritional needs.",
    price: "$ 16.00",
    img: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHdpdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Fish",
    description: "These types of foods make mental functions work higher.",
    price: "$ 12.20",
    img: "https://images.unsplash.com/photo-1597692493640-b70139c9e4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "Pizza",
    description:
      "It is really hard to prepare food such as pizza and cook it at home in daily life.",
    price: "$ 6.00",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "Hamburger",
    description:
      "I feel very good today, it will be great for me to eat hamburgers and have a pleasant afternoon at the mall.",
    price: "$ 8.10",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
export default function RestaurantDetails({ route, navigation }) {
  return (
    <View style={tw`bg-white h-full`}>
      {/* <StatusBar  /> */}
      <About route={route} />
      <Divider width={1.5} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
