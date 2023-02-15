import React from "react";
import { Navbar } from "./navigation/Navbar";
import { Search } from "./search";

import styles from "./header.module.scss";
import { Layout } from "../layout";

export const Header = () => {
  return (
    <header>
      <Layout>
        <div className={styles.header}>
          <Navbar />
          <Search />
        </div>
      </Layout>
    </header>
  );
};
