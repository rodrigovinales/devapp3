import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontFamily: "Montserrat-Regular",
    },
    name: {
        fontSize: 18,
        fontFamily: "Montserrat-Regular",
        color: '#212121'
    },
    details: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    quantity: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },
    price: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#212121'
    },
});