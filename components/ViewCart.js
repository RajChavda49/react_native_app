import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
// import firebase from "../firebase";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const clearItems = () => {};
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const rounded = Math.round(total * 10) / 10;
  const totalUSD = rounded.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
  });

  const addOrderToFirebase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  const checkoutModalContent = () => {
    return (
      <>
        <StatusBar />
        <View style={styles.modalContainer}>
          <View style={tw`bg-white h-3/5 w-full`}>
            <Text style={tw`text-center mt-2 font-bold text-lg`}>
              {restaurantName}
            </Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View
              style={tw`flex flex-row justify-between items-center mx-2 px-2`}
            >
              <Text style={tw`font-medium text-xl`}>subtotal</Text>
              <Text style={tw`font-medium text-xl`}>$ {totalUSD}</Text>
            </View>
            <TouchableOpacity
              style={tw`items-center flex-row justify-end self-center flex w-60 mt-6 bg-black p-3 rounded-3xl`}
              onPress={() => {
                setModalVisible(false), navigation.navigate("orderdetail");
                clearItems();
              }}
            >
              <Text
                style={tw`text-white text-center font-thin text-base mr-10 `}
              >
                Checkout
              </Text>
              <Text style={tw`text-white text-xs mt-1`}>$ {totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={tw`absolute bottom-8 flex-row items-center w-full justify-center flex`}
        >
          <TouchableOpacity
            style={tw`bg-black relative flex flex-row text-white p-3 rounded-3xl justify-end items-center w-60`}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={tw`z-10 text-lg text-white mr-5`}>View Cart</Text>
            <Text style={tw`text-white mt-2 text-sm mx-2`}>$ {totalUSD}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
}
