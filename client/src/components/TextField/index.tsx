import React from "react";
import styles from "./TextField.module.css";
import Typography from "@components/Typography";

const TextField = ({ label, type, value, onChange, ...rest }: any) => {
    return (
        <div className={styles.user_input}>
            <Typography type="label" htmlFor={`#${label}`}>{label}</Typography> <br />
            <input
                id={label}
                type={type}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export default TextField;
