import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import RestaurantDetails from "../screens/RestaurantDetails";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantItems({
  // navigation,
  restaurantData,
  RestaurantData,
}) {
  const navigation = useNavigation();
  return (
    <>
      {RestaurantData.map((item) => (
        <TouchableOpacity
          activeOpacity={1}
          key={item.id}
          onPress={() =>
            navigation.navigate("restaurantdeatils", {
              name: item.name,
              image: item.img,
              price: item.price,
              reviews: item.reviews,
              rating: item.rating,
              categories: item.categories,
            })
          }
        >
          <View style={tw`mt-3 p-3 bg-white `}>
            <RestaurantImage img={item.img} />
            <RestaurantInfo name={item.name} rating={item.rating.trim()} />
          </View>
        </TouchableOpacity>
        // <View
        //   style={tw`mt-3 p-3 bg-white `}
        //   key={item?.result_object?.location_id}
        // >
        //   <RestaurantImage
        //     img={item?.result_object?.photo?.images?.large?.url}
        //   />
        //   <RestaurantInfo
        //     name={item?.result_object?.name}
        //     rating={item?.result_object?.rating}
        //   />
        // </View>
      ))}
    </>
  );
}

const RestaurantImage = ({ img }) => (
  <>
    <Image
      source={{
        // uri: "https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI=",
        uri: img,
      }}
      style={tw`w-full h-40 rounded-xl`}
    />
    <TouchableOpacity>
      <Icons
        name="heart-outline"
        style={tw`absolute bottom-32 right-2`}
        size={25}
        color="white"
      />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = ({ name, rating }) => (
  <View style={tw`flex-row justify-between items-center mt-2 mx-3`}>
    <View>
      <Text style={tw`text-lg font-bold tracking-wider`}>{name}</Text>
      <Text style={tw`text-gray-400 text-sm`}>40-50 min</Text>
    </View>
    <Text style={tw`rounded-full p-3 bg-gray-200`}>
      {rating ? rating : "0.0"}
    </Text>
  </View>
);
