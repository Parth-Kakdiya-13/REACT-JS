import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { }
})

function shoppingCartReducer(state, action) {

    if (action.type === "Add_Item") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    if (action.type === "Update_Item") {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state, //not needed here because we have only one value
            items: updatedItems,
        };

    }
    return state;

}

export const CartContextProvider = ({ children }) => {

    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
        items: [],
    })

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "Add_Item",
            payload: id
        })
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: "Update_Item",
            productId: productId,
            amount: amount
        })
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
    }

    console.log(shoppingCartState);


    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    )

}