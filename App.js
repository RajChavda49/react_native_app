import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import { AuthorProvider } from "./hooks/useAuth";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
