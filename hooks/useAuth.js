import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

const UserContext = createContext(null);
export const AuthorProvider = () => {
  return (
    <View>
      <UserContext.Provider value={{ user: null }}></UserContext.Provider>
    </View>
  );
};

export default function useAuth() {
  return useContext(UserContext);
}
