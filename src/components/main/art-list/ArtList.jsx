import React, { useEffect, useState } from "react";

import { ArtItem } from "../art-item";
import { arts } from "../../../utils/constants/arts";

import styles from "./art-list.module.scss";

const data = localStorage.getItem("buy");
export const ArtList = () => {
  const [galary, setGalary] = useState(arts);
  
  const bookArtHandler = (id) => {
    const changeData = galary.map((item) => {
      return item.id === id ? { ...item, booked: !item.booked } : item;
    });
    setGalary(changeData);
  };

  useEffect(() => {
    localStorage.setItem("buy", JSON.stringify(galary));
  }, [galary]);

  useEffect(() => {
    const url = JSON.parse(data);
    setGalary(url);
  }, []);

  return (
    <div className={styles.container}>
      {galary.map((art) => {
        return (
          <ArtItem
            key={art.id}
            bookArt={bookArtHandler}
            {...art}
          />
        );
      })}
    </div>
  );
};
