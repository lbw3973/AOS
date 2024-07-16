import React from "react";
import { Tabs } from "@/navigation/Navigation";
import { SvgXml } from "react-native-svg";
import Home from "./Home";
import Intro from "../Auth/Intro";
import Login from "../Auth/Login";
import { BottomIcons } from "@/assets/Icons/Main/BottomIcons";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export interface IMainPathName {
  Main: undefined;
  Home: undefined;
}

const Main = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "PretendardVariable",
          fontWeight: "800",
          // fontSize: RFValue(20, 800),
        },
        headerStyle: {
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "#000000",
        },
        tabBarStyle: { height: (width / 100) * 12, maxHeight: 80 },
        tabBarLabelStyle: { display: "none" },
        // header: props => Header(props),
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={focused ? BottomIcons.Home_Focus : BottomIcons.Home_UnFocus} width="60%" height="60%" />
          ),
        }}
      />
      <Tabs.Screen
        name="Group"
        component={Intro}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={focused ? BottomIcons.Church_Focus : BottomIcons.Church_UnFocus} width="60%" height="60%" />
          ),
        }}
      />
      <Tabs.Screen
        name="Post"
        component={Login}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: () => <SvgXml xml={BottomIcons.Plus} width="60%" height="60%" />,
        }}
      />
      <Tabs.Screen
        name="DM"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={focused ? BottomIcons.DM_Focus : BottomIcons.DM_UnFocus} width="60%" height="60%" />
          ),
        }}
      />
      <Tabs.Screen
        name="Mypage"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={focused ? BottomIcons.Mypage_Focus : BottomIcons.Mypage_UnFocus} width="60%" height="60%" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Main;
