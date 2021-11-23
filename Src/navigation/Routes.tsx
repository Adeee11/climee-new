import React from"react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import TabRoutes from "./TabRoutes";
const Routes=()=>{
return(
    <>
    <NavigationContainer>
        <TabRoutes/>
    </NavigationContainer>
    </>
)
}
export default Routes;