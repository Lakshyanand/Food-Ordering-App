import React, { useContext } from "react";
import classes from './MealsItem.module.css';
import MealsForm from "./MealsForm";
import CartContext from "../Cart/CartContext";

const MealsItem = props => {

    const price = `$${props.price.toFixed(2)}`;

    const cartContext = useContext(CartContext);

    const addToCartHandler = (amount) => {

        // const item = {
        //     id: props.id,
        //     name: props.name,
        //     price: props.price,
        //     amount: amount
        // };

        // console.log(item);

        cartContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        });
    }

    return(
        <li className={classes.meal}>
            <div>
                <h3>
                    {props.name}
                </h3>   
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                    {price}
                </div>
            </div>
            <MealsForm id={props.id} addToCart={addToCartHandler}/>
        </li>
    )
};

export default MealsItem;