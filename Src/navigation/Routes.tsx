import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./TabRoutes";
const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </>
  );
};
export default Routes;
