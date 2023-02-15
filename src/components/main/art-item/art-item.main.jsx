import React, { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckedIcon,
} from "../../../assets/icons";

import { Button } from "../../UI/button";

import styles from "./art-item.module.scss";

export const ArtItem = ({
  sold,
  image,
  title,
  booked,
  oldPrice,
  description,
  currentPrice,
}) => {
  const [loading, setLoading] = useState(false);
  const [armored, setArmored] = useState(booked);

  async function fetchData() {
    setLoading(true);
    setArmored(false);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
      );
      const json = await response.json();
      setArmored(json);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={sold ? `${styles.item} ${styles.sold}` : styles.item}>
      <img
        src={image}
        alt='/'
      />
      <div className={styles.item_title_box}>
        <h3 className={styles.item_title}>
          <ArrowLeftIcon />
          {title}
          <ArrowRightIcon />
        </h3>

        <h3>{description}</h3>
      </div>
      <div className={sold ? `${styles.price} ${styles.sold}` : styles.price}>
        {sold ? (
          "Продано на Аукционе"
        ) : (
          <>
            <div>
              <p className={styles.old_price}>{oldPrice || null}</p>
              <p className={styles.current_price}>{currentPrice}$</p>
            </div>
            <Button
              onClick={fetchData}
              className={armored ? "success" : null}
            >
              {loading && "Loading..."}
              {armored ? (
                <>
                  <CheckedIcon />В корзине
                </>
              ) : (
                "Купить"
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
