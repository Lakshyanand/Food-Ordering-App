import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
    items: [],
    totalAmount: 0 
}

const dispatchReducerFunction = (latestState, action) => {
    // console.log('insode reducer function current state', latestState);


    if(action.type==='addItem') {
        // console.log('action', action);
        const updatedAmount = latestState.totalAmount + action.items.price * action.items.amount;

        const itemExist = latestState.items.findIndex((item) => item.id === action.items.id);
        const existingItem = latestState.items[itemExist];

        let updatedItems;

        if(existingItem) {

            // alert(existingItem.amount);
            // alert(action.items.amount);
            // alert(existingItem.amount + action.items.amount);
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.items.amount,
            }
            console.log('updatedItem',updatedItem);
            updatedItems = [...latestState.items]
            console.log(updatedItems);
            updatedItems[itemExist] = updatedItem;
            console.log(updatedItems);

        } else {
            updatedItems = latestState.items.concat(action.items)
        } 

         return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }

    if(action.type==='removeItem') {
        const itemExist = latestState.items.findIndex(
            (item) => item.id === action.id
          );
          const existingItem = latestState.items[itemExist];
          const updatedTotalAmount = latestState.totalAmount - existingItem.price;
          let updatedItems;
          if (existingItem.amount === 1) {
            updatedItems = latestState.items.filter(item => item.id !== action.id);
          } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...latestState.items];
            updatedItems[itemExist] = updatedItem;
          }
      
          return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
          };
    }
    return defaultState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(dispatchReducerFunction, defaultState);

    const addItemToCartHandler = (item) => {

        dispatchCartAction({
            type: 'addItem',
            items: item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'removeItem',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;