import React from "react";
import styles from "./Button.module.css";

const Button = ({ btnType, children, onClick, ...rest }: any) => {
    let btnClasses: string[] = [styles.btn];
    switch (btnType) {
        case "primary": {
            btnClasses.push(styles.primary);
            break;
        }
    }
    const combinedClassName = btnClasses.join(" ");

    return (
        <button
            type="button"
            className={combinedClassName}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
