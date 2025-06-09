import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";

export type RootStackParamList = {
  Search: undefined;
  Downloads: undefined;
  Favorites: undefined;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigator;
