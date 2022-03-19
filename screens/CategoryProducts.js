import React from "react";
import { View, Text, StyleSheet } from "react-native"
import Boton from "../components/Boton"


const CategoryProducts = ({navigation}) => {

    return (

        <View style={styles.container}>
            <Text>Categoria de Producto</Text>
            <Boton
                text="Ir a Productos 1"
                onPress={() => {
                    navigation.navigate('ProductsDetail')
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : 50
    }
});

export default CategoryProducts;