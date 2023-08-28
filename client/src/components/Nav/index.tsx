"use client";

import React, { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    const [isOpenHamMenu, setIsOpenHamMenu] = useState(false);
    const isUserLoggedIn = false;

    const toggleHamMenu = () => {
        setIsOpenHamMenu((prev) => !prev);
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

                {isUserLoggedIn ? (
                    <ul
                        className={`${styles.nav_menu} ${
                            isOpenHamMenu && styles.active
                        }`}
                    >
                        <li className={styles.nav_item}>
                            <Link href="/" className={styles.nav_link}>
                                My profile
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            <Link href="/" className={styles.nav_link}>
                                Apply for leave
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            <Link href="/" className={styles.nav_link}>
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <div className={styles.headline}>Leave Manager</div>
                )}

                <div className={styles.hamburger} onClick={toggleHamMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
