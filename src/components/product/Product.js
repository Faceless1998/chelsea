import React from "react";
import { Options } from "./data";
import { Link } from "react-router-dom";
import styles from "./product.module.css";
import { useTranslation } from "react-i18next";

export const Product = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <h1> {t("phone")} </h1>
        <div className={styles.productbox}>
          <ul className={styles.products}>
            {Options.map((option) => (
              <li key={option.id} className={styles.box}>
                <div>
                  <img src={option.image} alt={option.phoneName} />
                  <p className={styles.prodname}>
                    {localStorage.getItem("lang") === "ge"
                      ? option.phoneNameGeo
                      : localStorage.getItem("lang") === "en"
                      ? option.phoneName
                      : option.phoneNameSp}
                  </p>
                  <p className={styles.prodprice}>{option.price}</p>
                  <div>
                    <Link
                      to={`/product/${option.id}`}
                      className={styles.productlink}
                    >
                      {localStorage.getItem("lang") === "ge"
                        ? "ვრცლად"
                        : localStorage.getItem("lang") === "en"
                        ? "more"
                        : "en detalle"}
                        
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
