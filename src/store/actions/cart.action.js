
import { URL_API } from "../../Utils/Databases"
import { cartTypes } from "../types/cart.types"

const { ADD_ITEM, REMOVE_ITEM, COMFIRM_CART, EMPTY_CART } = cartTypes;

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
});

export const emptyCart = (item) => ({
    type: EMPTY_CART,
    item
})

export const confirmCart = (cart, total, user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/order.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date: Date.now(), items: cart, total, user })
            });

            const result = await response.json();
            dispatch({
                type: COMFIRM_CART,
                cart: result
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}