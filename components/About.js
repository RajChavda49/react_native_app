import { View, Text, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const yelpRestautantDetails = {
  name: "Rockin’ and Ramen",
  image:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  price: "$ 19.30",
  reviews: "2489",
  rating: "4.3",
  categories: [
    { title: "indian" },
    { title: "Comfort food" },
    { title: "ice cream" },
  ],
};

export default function About({ route }) {
  const { categories, name, price, image, rating, reviews } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View style={tw``}>
      <RestaurantImage img={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ img }) => (
  <Image
    source={{
      uri: img,
    }}
    style={tw`w-full h-40`}
  />
);

const RestaurantTitle = ({ name }) => (
  <Text style={tw` text-xl font-bold mx-2`}>{name}</Text>
);

const RestaurantDescription = ({ description }) => (
  <Text style={tw`text-sm font-semibold my-2 mx-2`}>{description}</Text>
);
