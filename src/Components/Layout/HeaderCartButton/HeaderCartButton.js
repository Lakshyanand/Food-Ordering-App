import React, { useContext, useEffect, useState } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "./CartIcon";
import CartContext from "../../Cart/CartContext";

const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);

    const {items} = cartContext;

    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

    useEffect(() => {

        if(items.length === 0) {
            return;
        }
        setIsButtonHighlighted(true);

        const interval = setTimeout(()=> {
            setIsButtonHighlighted(false);
        }, 300);

        return(() => {
            clearInterval(interval);
        });

    },[items]);

    
    const numberOfCartItems = items.reduce((total, item) => {
        return total + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${isButtonHighlighted ? classes.bump : ''}`

    return(
        <React.Fragment>
            <button onClick={props.onClick} className={buttonClasses}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    Cart
                </span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </button>
        </React.Fragment>
    )
};

export default HeaderCartButton;