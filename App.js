import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#342342" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#453153" },
        drawerContentStyle: { backgroundColor: "#453153" },
        drawerActiveBackgroundColor: "#d1b5e5",
        drawerActiveTintColor: "#342342",
        drawerInactiveTintColor: "#d1b5e5",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="md-bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "fancy-bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View onLayout={onLayoutRootView} style={styles.rootContainer}>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#342342" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#453153" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ navigation, route }) => {
              //   const categoryTitle = route.params.categoryTitle;
              //   return {
              //     title: categoryTitle,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
