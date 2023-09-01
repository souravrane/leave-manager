"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useGlobalAuthContext } from "@contextAPI/authContext";

import styles from "./Nav.module.css";

const Nav = () => {
    const { push } = useRouter();
    const { isUserLoggedIn, setIsUserLoggedIn } = useGlobalAuthContext();

    const [isOpenHamMenu, setIsOpenHamMenu] = useState(false);
    const [hamClasses, setHamClasses] = useState(
        `${styles.bar} ${styles.closedMenu}`
    );

    const toggleHamMenu = () => {
        if (!isOpenHamMenu) {
            setHamClasses(`${styles.bar} ${styles.openMenu}`);
        } else {
            setHamClasses(`${styles.bar} ${styles.closeMenu}`);
        }
        setIsOpenHamMenu((prev) => !prev);
    };

    const signOut = () => {
        setIsUserLoggedIn(false);
        push("/login");
    };

    return (
        <header>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/assets/company-logo.svg"
                        alt="logo"
                        width={200}
                        height={62}
                        className={styles.logo}
                    />
                </Link>

                {isUserLoggedIn && (
                    <>
                        <ul
                            className={`${styles.nav_menu} ${
                                isOpenHamMenu && styles.active
                            }`}
                        >
                            <li className={styles.nav_item}>
                                <Link href="/" className={styles.nav_link}>
                                    Dashboard
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href="/" className={styles.nav_link}>
                                    Apply for leave
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link
                                    href="/"
                                    className={styles.nav_link}
                                    onClick={signOut}
                                >
                                    Sign Out
                                </Link>
                            </li>
                        </ul>

                        <div
                            className={styles.hamburger}
                            onClick={toggleHamMenu}
                        >
                            <span className={hamClasses}></span>
                            <span className={hamClasses}></span>
                            <span className={hamClasses}></span>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Nav;
