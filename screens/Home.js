import React from "react";
import { View, Button } from "react-native"
import Boton from "../components/Boton"

const Home = ({ navigation }) => {
    return (
        <View>
            <Boton
                text="Ir a Categoria de Productos"
                onPress={() => {
                    navigation.navigate('CategoryProducts')
                }}
            />
        </View>
    )
}

export default Home;