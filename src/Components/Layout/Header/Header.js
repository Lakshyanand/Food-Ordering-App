import React from "react";
import classes from './Header.module.css';
import mealsImage from "../../../Assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h2>React Meals</h2>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={`${classes['main-image']}`}>
                <img src={mealsImage} alt="meal"></img>
            </div>
        </React.Fragment>
    );  
}

export default Header;