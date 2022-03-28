import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_price: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: "SmoochSans-Bold"
    },
    text_name: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: "Montserrat-Regular"
    },
    image: {
        height: 300,
        width: 300,
    },
    buttonOpacity: {
        backgroundColor: '#576574',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    buttonText : {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },
    containerButtons: {
        flexDirection: 'row',
        alignItems:"center"
    }
})