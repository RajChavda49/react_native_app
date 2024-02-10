import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantDetails from "./screens/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderDetail from "./screens/OrderDetail";

const store = configureStore();

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="restaurantdeatils" component={RestaurantDetails} />
        <Stack.Screen name="orderdetail" component={OrderDetail} />
      </Stack.Navigator>
    </ReduxProvider>
  );
};

export default StackNavigation;
