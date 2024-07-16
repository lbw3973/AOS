import React from "react";
import { DefaultTheme, NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth, { IAuthPathName } from "@/pages/Auth";
import Main, { IMainPathName } from "@/pages/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

interface StackParamList extends IAuthPathName, IMainPathName {}

export const useAppNavigation = (): NavigationProp<StackParamList> => {
  return useNavigation<NavigationProp<StackParamList>>();
};

export const Stack = createNativeStackNavigator();
export const Tabs = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          contentStyle: { minWidth: 360, maxWidth: 720, width: "100%", margin: "auto" },
        }}
      >
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
