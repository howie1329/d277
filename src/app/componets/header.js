import Link from "next/link";
import React from "react";
import styles from "../componets/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link id={styles.button} href="/">
        Home
      </Link>
      <Link id={styles.button} href="/trenton">
        Trenton
      </Link>
      <Link id={styles.button} href="/newark">
        Newark
      </Link>
      <Link id={styles.button} href="/atlantic">
        Atlantic City
      </Link>
      <Link id={styles.button} href="/contact">
        Contact Us
      </Link>
    </header>
  );
}
