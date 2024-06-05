import React from "react";
import { Options } from "./data";
import { Link } from "react-router-dom";
import styles from "./product.module.css";

export const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>ტელეფონები</h1>
        <div className={styles.productbox}>
          <ul className={styles.products}>
            {Options.map((option) => (
              <li key={option.id} className={styles.box}>
                <div>
                  <img src={option.image} alt={option.phoneName} />
                  <p className={styles.prodname}> {option.phoneName}</p>
                  <p className={styles.prodprice}>{option.price}</p>
                  <div>
                    <Link
                      to={`/product/${option.id}`}
                      className={styles.productlink}
                    >
                      ვრცლად
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
