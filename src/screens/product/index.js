import React from 'react'

import { View, Text, Button, Image } from 'react-native'
import { colors } from '../../constants/themes';
import { styles } from './styles'

const Products = ({ navigation, route }) => {
    const { product } = route.params;
    const { name, description, price, src } = product;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={src} />
            <Text style={styles.text_name}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text_price}>Precio: ${price}</Text>
            
            <Button title="HACER NADA" onPress={() => null} color={colors.buttonColor}/>
        </View>
    )
}

export default Products