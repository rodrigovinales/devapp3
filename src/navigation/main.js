import React from 'react';
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './cart';
import OrderNavigator from './order';
import ShopNavigator from './shop';
import Icon from 'react-native-ionicons'



const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <TabStack.Navigator
            initialRouteName='Shop'
            screenOptions={{
                headerShown: false,
            }}
        >
            <TabStack.Screen
                name='Shop'
                component={ShopNavigator}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            color='blue'
                            name='home'
                            size={40}
                        />
                    ),
                    title: 'Inicio',
                }}
            />
            <TabStack.Screen
                name='Cart'
                component={CartNavigator}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            color='red'
                            name='cart'
                            size={40}
                        />
                    ),
                    title: 'Carrito',
                }}
            />
            <TabStack.Screen
                name='Order'
                component={OrderNavigator}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            color='green'
                            name='list'
                            size={40}
                        />
                    ),
                    title: 'Ordenes',
                }}
            />

        </TabStack.Navigator>
    )
}

export default MainNavigator;