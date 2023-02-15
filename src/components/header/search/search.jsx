import React from "react";
import { Button } from "../../UI/button";
import styles from "./search.module.scss";

export const Search = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={styles.search_container}
      onSubmit={submitHandler}
    >
      <input
        className={styles.search_input}
        placeholder='Поиск по названию картины'
      />
      <Button type='submit'>Найти</Button>
    </form>
  );
};
