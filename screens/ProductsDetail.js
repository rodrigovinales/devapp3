import React from "react";
import { View, Text } from "react-native"
import Boton from "../components/Boton"

const ProductsDetail = ({navigation}) => {

    return (

        <View>
            <Text>Detalle de Productos</Text>
            <Boton
                text="Ver detalle de producto 1"
                onPress={() => {
                    navigation.navigate('ItemsDetail')
                }}
            />
        </View>
    )
}

export default ProductsDetail;