import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../../constants/themes'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height / 4,
        margin: 15,
        borderRadius: 6,
        // width: width /2
    },
    touchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        padding: 8

    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: colors.textColor
    }
})