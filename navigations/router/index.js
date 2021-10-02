import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StoreStack from "./StoreStack";
const Root = createStackNavigator();

const Router = () => {
  return (
    // <Test/>
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen component={StoreStack} name="StoreStack" />
    </Root.Navigator>
  );
};

export default Router;
