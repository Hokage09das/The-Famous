import React from "react";
import { MuseumIcon } from "../../../assets/icons";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div>
      <ul className={styles.container}>
        <li>
          <MuseumIcon />
        </li>
        <li>Каталог</li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>Контакты</li>
        <li>О галерее</li>
      </ul>
    </div>
  );
};
