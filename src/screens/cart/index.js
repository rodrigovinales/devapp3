import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import Boton from "../../components/Boton";
import CartItem from "../../components/categories/cart-item/index"
import { confirmCart, removeItem, emptyCart } from "../../store/actions/cart.action";
import { styles } from "./styles";

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)

    const handleDeleteItem = (id) => dispatch(removeItem(id))

    const handleConfirmCart = () => {
        dispatch(confirmCart(items, total))
        Alert.alert('Compra Satisfactoria !!')
        navigation.navigate('Home')
        dispatch(emptyCart(items, total))
    }

    const handleConfirm = () => {
        Alert.alert(
            "Desea confirmar la compra??",
            "SI para generar el pedido o seguir comprando",
            [
                { text: "Seguir Comprando", style: "cancel" },
                { text: "SI, finalizar", onPress: () => handleConfirmCart() }
            ]
        );
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem} />

    if (total === 0) {
        Alert.alert('Carrito Vacio !!, volvemos a Inicio')
        navigation.navigate('Home')
    }


    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
            <Boton
                onPress={() => handleConfirm()}
                text="CONFIRMAR COMPRA"
            />
            <View style={styles.footer}>
                <Text style={styles.total}>Total:</Text>
                <Text style={styles.totalPrice}>${total}</Text>
            </View>
        </View>
    )
}

export default connect()(Cart);