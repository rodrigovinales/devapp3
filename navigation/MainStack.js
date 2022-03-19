import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoryProducts from "../screens/CategoryProducts";
import ItemsDetail from "../screens/ItemsDetail";
import ProductsDetail from "../screens/ProductsDetail";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator()

const MainStack = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={Home}
                />
                <Stack.Screen
                    name="CategoryProducts"
                    component={CategoryProducts}
                />
                <Stack.Screen
                    name="ItemsDetail"
                    component={ItemsDetail}
                />
                <Stack.Screen
                    name="ProductsDetail"
                    component={ProductsDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;