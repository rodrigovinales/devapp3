import React from 'react'
import { View, Text, Button, Image, ScrollView } from 'react-native'
import { colors } from '../../constants/themes';
import { styles } from './styles'
import { useSelector, connect, useDispatch } from 'react-redux';

import { addItem } from "../../store/actions/cart.action"

const Products = ({ navigation, route }) => {
    // const { product } = route.params;

    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selectedProduct);
    const { name, description, price, src } = product;

    const handleAddToCart = () => dispatch(addItem(product));

    return (

        <ScrollView style={styles.container}>
            <Image style={styles.image} source={src} />
            <Text style={styles.text_name}>{name}</Text>
            <Text style={styles.text_description}>{description}</Text>
            <Text style={styles.text_price}>Precio: ${price}</Text>
            <View style={styles.containerButtons}>
                <Button title="Agregar a Carrito" onPress={() => handleAddToCart()} color={colors.buttonColor} />
                {/* <View style={styles.cartButton}>
                    <Button title="Ir a Carrito" onPress={() => navigation.navigate('Cart')} color='#212121' />
                </View> */}
            </View>
        </ScrollView>
    )
}

export default connect()(Products)