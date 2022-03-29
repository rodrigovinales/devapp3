import React from 'react'
import { View, Text, Button, Image, TouchableOpacity, ToastAndroid } from 'react-native'
// import Toast from 'react-native-toast-message';
import { colors } from '../../constants/themes';
import { styles } from './styles'
import { useSelector, connect } from 'react-redux';


const Products = ({ navigation, route }) => {
    // const { product } = route.params;
    const product = useSelector(state => state.products.selectedProduct);

    const { name, description, price, src } = product;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={src} />
            <Text style={styles.text_name}>{name}</Text>
            <Text style={styles.text_description}>{description}</Text>
            <Text style={styles.text_price}>Precio: ${price}</Text>
            <View style={styles.containerButtons}>
            <TouchableOpacity
                style={styles.buttonOpacity}
                onPress={() => {
                    ToastAndroid.show('Producto Disponible', 2000);
                }}
                >
                <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
            {/* <Button title="HACER NADA" onPress={() => null} color={colors.buttonColor} /> */}
            </View>
        </View>
    )
}

export default connect()(Products)