import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function SearchBar({ setCity, city }) {
  return (
    <View styles={tw`flex flex-row`}>
      <Ionicons
        name="location-sharp"
        style={tw`absolute left-6 top-3 z-10`}
        size={25}
        color="black"
      />
      <TextInput
        value={city}
        placeholder="Search"
        onChangeText={(text) => setCity(text)}
        style={tw`bg-gray-200 rounded-3xl font-bold relative px-8 py-3 mx-4`}
      />
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            position: "relative",
            paddingLeft: 40,
          },
          textInputContainer: {
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        // query={{ key: "AIzaSyCi5jgoWEcps7_ms9NA281yjjlhF57UuZA" }}
        query={{ key: "9b2ead12b27a557b4ea407c2283303a2" }}
        onPress={(data, details = null) => {
          console.log(data.description);
        }}
      /> */}

      <TouchableOpacity
        style={tw`absolute right-3 top-2 z-10 flex-row items-center bg-white px-4 py-2 mx-3 rounded-2xl`}
        // onPress={() => {
        //   Keyboard.dismiss();
        //   setCity(city);
        //   console.log(city);
        // }}
      >
        <AntDesign name="clockcircle" size={11} color="black" />
        <Text style={tw`ml-2 font-bold`}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
