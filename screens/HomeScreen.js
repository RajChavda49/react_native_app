import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import tw from "tailwind-react-native-classnames";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import axios from "axios";
import Spinner from "../assets/spinner.svg";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs";

const RestaurantData = [
  {
    id: 1,
    name: "Killer Pizza from Mars",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: "4.5",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 2,
    name: "The French Laundry",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: "4.4",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 3,
    name: "Goosefoot",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: "4.0",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 4,
    name: "Gochew Grill",
    img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: "4.2",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 5,
    name: "Bite Me Sandwiches",
    img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: "5.0",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 6,
    name: "Six Seven",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: "4.5",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 7,
    name: "Garage Kitchen + Bar",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: " 4.4",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 8,
    name: "Egg Slut",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: "4.0",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 9,
    name: "The Purple Pig",
    img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: "4.2",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
  {
    id: 10,
    name: "Blue Mermaid",
    img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: "5.0",
    price: "$ 10",
    reviews: "4.7",
    categories: [
      { title: "indian" },
      { title: "Comfort food" },
      { title: "ice cream" },
    ],
  },
];
const HomeScreen = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("hollywood");
  const [activeTab, setActiveTab] = useState("Delivery");

  // useEffect(() => {
  //   var options = {
  //     method: "GET",
  //     url: "https://travel-advisor.p.rapidapi.com/locations/search",
  //     params: {
  //       query: { city },
  //       limit: "30",
  //       offset: "0",
  //       units: "km",
  //       location_id: "1",
  //       currency: "USD",
  //       sort: "relevance",
  //       lang: "en_US",
  //     },
  //     headers: {
  //       "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  //       "x-rapidapi-key": "13eaf26231mshc06fa2691f3e955p114b6ajsn855995da097f",
  //     },
  //   };

  //   axios(options)
  //     .then((res) => setRestaurantData(res.data.data))
  //     .catch((err) => console.log(err));
  // }, [city]);
  // console.log(restaurantData[1]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", paddingTop: 30, flex: 1 }}>
      <View style={tw`bg-white pb-10`}>
        <HeaderTabs />
        <SearchBar setCity={setCity} city={city} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {restaurantData ? (
          <RestaurantItems
            restaurantData={restaurantData}
            RestaurantData={RestaurantData}
            navigation={navigation}
          />
        ) : (
          <Text
            style={tw`text-center text-2xl justify-center items-center  font-bold`}
          >
            Loading.....
          </Text>
        )}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;
