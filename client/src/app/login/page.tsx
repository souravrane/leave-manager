"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Button from "@components/Button";
import TextField from "@components/TextField";
import Typography from "@components/Typography";
import { useGlobalAuthContext } from "@contextAPI/authContext";

import Text from "./content.json";
import styles from "./login.module.css";

const Login = () => {
    const { push } = useRouter();
    const { setIsUserLoggedIn } = useGlobalAuthContext();
    let emailAddress = "";
    let password = "";

    const updateEmail = () => {};
    const updatePassword = () => {};
    const signIn = () => {
        setIsUserLoggedIn(true);
        push("/dashboard");
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <Typography type="h2" className={styles.heading}>
                    {Text.heading}
                </Typography>
                <div className={styles.input_elements}>
                    <TextField
                        type="email"
                        label={Text.labels.email}
                        onChange={updateEmail}
                    />
                </div>
                <div className={styles.input_elements}>
                    <TextField
                        type="password"
                        label={Text.labels.password}
                        onChange={updatePassword}
                    />
                </div>

                <div className={styles.btn}>
                    <Button btnType="primary" onClick={signIn}>
                        {Text.labels.loginBtn}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
