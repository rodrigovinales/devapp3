import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import auth from "../screens/auth/index"

const Stack = createNativeStackNavigator();

const authNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="auth" component={auth} />
        </Stack.Navigator>
    )
}

export default authNavigator;
