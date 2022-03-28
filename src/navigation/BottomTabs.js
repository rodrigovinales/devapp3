import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react"
import Home from "../screens/home";
import Category from "../screens/category";
import Product from "../screens/product";


const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name = "Ir a INICIO" component = { Home } />
        </Tab.Navigator>
    )
}