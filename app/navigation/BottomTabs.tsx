import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen";
import DownloadsScreen from "../screens/DownloadsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

export type BottomTabParamList = {
  Search: undefined;
  Downloads: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<BottomTabParamList>();

const BottomTabs = () => {
  // Helper to wrap screen with large title
  const LargeTitleScreen = (title: keyof BottomTabParamList) => (
    <Stack.Navigator>
      <Stack.Screen
        name={title}
        options={{
          headerLargeTitle: true,
          headerTitle: title,
        }}
        component={
          title === "Search"
            ? SearchScreen
            : title === "Downloads"
            ? DownloadsScreen
            : FavoritesScreen
        }
      />
    </Stack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "white" },
        headerShown: false,
        tabBarActiveTintColor: "purple",
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "Search") iconName = "search-outline";
          else if (route.name === "Downloads") iconName = "download-outline";
          else if (route.name === "Favorites") iconName = "heart-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={"Search"}
        options={{ headerShown: false }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={"Favorites"}
        component={() => LargeTitleScreen("Favorites")}
      />
      <Tab.Screen
        name={"Downloads"}
        component={() => LargeTitleScreen("Downloads")}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
