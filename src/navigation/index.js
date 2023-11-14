import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import RecipeDetails from "../screens/RecipeDetails";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="RecipeDetail"
          options={{ presentation: "fullScreenModal" }}
          component={RecipeDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
