import React from "react";
import { StyleSheet, Text, Modal, View, ImageBackground } from "react-native";

const ModalWelcome = (props) => {
    const { visible } = props;

    if (!visible) return null;

    return (
        <Modal animationType="slide" visible={visible}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../assets/komputerWillkommen.jpg')}>

                    <View style={styles.modalTitle}>
                        <Text style={styles.modalHeader}>BIENVENIDOS !!!</Text>
                    </View>
                    <View>
                        <Text style={styles.modalMessage}>Aqui podras ver nuestros productos..</Text>
                    </View>
                </ImageBackground>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey"
    },
    imageBackground: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "90%",
        marginTop: 50
    },
    modalTitle: {
        alignItems: "center",
    },
    modalHeader: {
        fontSize: 48,
        color: "#F0A6AD",
        marginBottom: 40,
        fontFamily : "Montserrat-Regular"
    },
    modalMessage: {
        fontSize: 38,
        marginBottom: 10,
        color: "#F0A6AD",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontFamily : "SmoochSans-Medium"
    }
})

export default ModalWelcome;