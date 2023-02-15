import React from "react";

import { ArtItem } from "../art-item";
import { arts } from "../../../utils/constants/arts";

import styles from "./art-list.module.scss";

export const ArtList = () => {
  return (
    <div className={styles.container}>
      {arts.map((art) => {
        return (
          <ArtItem
            key={art.id}
            {...art}
          />
        );
      })}
    </div>
  );
};
