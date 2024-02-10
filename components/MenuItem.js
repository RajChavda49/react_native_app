import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

// const foods = [
//   {
//     id: 1,
//     title: "Tandoori Chicken",
//     description:
//       "Amzaing Indian dish with tenderion chicken off the sizzies 🔥",
//     price: "$ 19.20",
//     img: "https://images.unsplash.com/photo-1567121938596-6d9d015d348b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 2,
//     title: "Salad",
//     description: "I have a salad at least once a day to keep my form.",
//     price: "$ 10.20",
//     img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 3,
//     title: "Sandwich",
//     description:
//       " Every time I get hungry in the hustle and bustle of everyday life, I order a sandwich from a buffet and in this way I try to meet my nutritional needs.",
//     price: "$ 16.00",
//     img: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHdpdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 4,
//     title: "Fish",
//     description: "These types of foods make mental functions work higher.",
//     price: "$ 12.20",
//     img: "https://images.unsplash.com/photo-1597692493640-b70139c9e4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 5,
//     title: "Pizza",
//     description:
//       "It is really hard to prepare food such as pizza and cook it at home in daily life.",
//     price: "$ 6.00",
//     img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 6,
//     title: "Hamburger",
//     description:
//       "I feel very good today, it will be great for me to eat hamburgers and have a pleasant afternoon at the mall.",
//     price: "$ 8.10",
//     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
// ];
export default function MenuItem({
  restaurantName,
  hideCheckbox,
  foods,
  marginLeft,
}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <>
      <ScrollView>
        {foods.map((item) => (
          <View
            style={tw`border-b border-gray-200 mx-2 flex-row justify-between items-center my-1 p-1 `}
            key={item.id}
          >
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 5 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(item, checkboxValue)}
                isChecked={isFoodInCart(item, cartItems)}
              />
            )}
            <FoodInfo
              title={item.title}
              info={item.description}
              price={item.price}
            />
            <FoodImage
              img={item.img}
              marginLeft={marginLeft ? marginLeft : 0}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}
const FoodInfo = ({ title, price, info, hideCheckbox }) => (
  <View style={tw`justify-evenly flex w-2/4 `}>
    <Text style={tw`text-lg font-bold tracking-wider`}>{title}</Text>
    <Text style={tw`text-xs`}>{info} </Text>
    <Text style={tw`text-sm font-semibold`}>{price}</Text>
  </View>
);

const FoodImage = ({ img, hideCheckbox }) => (
  <View>
    <Image
      source={{
        uri: img,
      }}
      style={tw`w-20 h-20 rounded-xl`}
    />
  </View>
);
