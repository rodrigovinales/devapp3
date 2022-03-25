import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Boton = (props) => {

    const { onPress, text } = props;

    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Boton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#2196F3",
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: "#f9f9f9",
        textAlign:"center"
    }
})
