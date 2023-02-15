import React from "react";
import { Layout } from "../layout";
import { ArtList } from "./art-list";

import styles from "./main.module.scss";

export const Main = () => {
  return (
    <main>
      <Layout>
        <div className={styles.main}>
          <h1 className={styles.title}>Картины эпохи Возрождения</h1>
          <ArtList />
        </div>
      </Layout>
    </main>
  );
};
