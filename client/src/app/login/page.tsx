"use client";

import React from "react";
import styles from "./login.module.css";
import TextField from "@components/TextField";
import Typography from "@components/Typography";
import Button from "@components/Button";

const Login = () => {
    let emailAddress = "";
    let password = "";

    const updateEmail = () => {};
    const updatePassword = () => {};

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <Typography type="h2" className={styles.heading}>
                    Log in to Leave Manager
                </Typography>
                <div className={styles.input_elements}>
                    <TextField
                        type="email"
                        label="Email address"
                        onChange={updateEmail}
                    />
                </div>
                <div className={styles.input_elements}>
                    <TextField
                        type="password"
                        label="Password"
                        onChange={updatePassword}
                    />
                </div>

                <div className={styles.btn}>
                    <Button btnType="primary">Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
