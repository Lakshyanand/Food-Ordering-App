import React, { useContext } from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "./CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const cartHasItems = cartContext.items.length > 0;

    const removeFromCartHandler = (id) => {
        cartContext.removeItem(id)
    }

    const addToCartHandler = (item) => {
        cartContext.addItem({...item, amount:1})
    }

    const cartItems = <ul className={classes['cart-items']}>{cartContext.items.map((item) => {
        return <CartItem 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            description={item.description} 
            amount={item.amount} 
            onRemove={removeFromCartHandler.bind(null, item.id)} 
            onAdd={addToCartHandler.bind(null, item)}
        />
    })}</ul>;

    return(
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {cartHasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;