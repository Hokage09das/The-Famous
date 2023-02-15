import React from "react";
import { AdressIcon, PhoneIcon } from "../../assets/icons";
import { Navbar } from "../header/navigation/navbar";
import { Layout } from "../layout";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.footer_container}>
          <Navbar />
          <div className={styles.callback}>
            <p>
              <PhoneIcon />
              +7 (495) 555-55-55
            </p>
            <p>
              <AdressIcon />
              г. Москва, ул. Расплетина, 24
            </p>
          </div>
        </div>
      </Layout>
    </footer>
  );
};
