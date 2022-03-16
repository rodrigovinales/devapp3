import React from "react";

import { Text, View, StyleSheet, Image } from "react-native";

const Header = () => {

    return (
        <View style={styles.header}>

            <Image
                style={styles.tinyLogo}
                source={require('../assets/computerikone.jpg')}
            />
            <Text style={styles.text}>KOMPUTEKNIKEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#D8BEBF",
        borderColor: "#000",
        borderWidth: 1,
    },
    text: {
        // textAlign: "center",
        fontSize: 30,
        marginTop:5
    },
    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius:10
    },
})

export default Header;