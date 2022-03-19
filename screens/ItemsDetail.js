import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"


const ItemsDetail = ({ navigation }) => {

    return (

        <View>
            <Text style={styles.textPage}>Detalle de productos</Text>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/mouse.jpg')}
                />
                <Text style={styles.textDesc}>Mouse Genius Rojo Inalambrico</Text>

            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft:50
    },
    logo: {
        width: 250,
        height: 250,
    },
    textPage: {
        fontSize: 30,
        textAlign: "center"
    },
    textDesc: {
        fontSize: 20,
        textAlign: "center",
        color: "black"
    }
});

export default ItemsDetail;