import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../../constants/themes'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: height / 4,
        height: height / 4,
        margin: 15,
        borderRadius: 6,
    },
    touchable: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: "blue",
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 9 },
        shadowRadius: 5,
        elevation: 5,
        padding: 15,   
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 26,
        color: colors.textColor,
    },
    description: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#D8BEBF',
        textAlign:"center"
    },
    price: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 24,
        color: '#000000'
    }
})