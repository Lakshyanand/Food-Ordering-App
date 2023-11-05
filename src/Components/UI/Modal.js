import React from "react";
import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onClick}></div>
    );
};

const Overlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const Modal = props => {
    return(
        <React.Fragment>
            {/* <Backdrop />
            <Overlay>{props.children}</Overlay> */}
            {ReactDom.createPortal(<Backdrop onClick={props.onClose}/>, portalElement)}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </React.Fragment>
    );

};

export default Modal;