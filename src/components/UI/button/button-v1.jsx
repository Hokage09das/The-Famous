import React from "react";
import styles from "./button.module.scss";

export const Button = ({ children, onClick, type, className, ...props }) => {
  console.log(className);
  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
