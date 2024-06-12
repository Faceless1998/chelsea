import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./layout.css";

import US from "./../assets/us.jpg";
import GEO from "./../assets/georgia.jpg";
import SP from "./../assets/spain.jpg";

import { useTranslation } from "react-i18next";

const Layout = () => {
  const [openBox, setOpenBox] = useState(null);

  const toggleBox = (boxNumber) => {
    setOpenBox(openBox === boxNumber ? null : boxNumber);
  };

  const closeBox = () => {
    setOpenBox(null);
  };

  const changeLanguageHandler = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  let langName;

  if (localStorage.getItem("lang") === "en") {
    langName = (
      <div className="flag" onClick={() => changeLanguageHandler("en")}>
        <img src={US} alt="US Flag" />
      </div>
    );
  } else if (localStorage.getItem("lang") === "ge") {
    langName = (
      <div className="flag" onClick={() => changeLanguageHandler("ge")}>
        <img src={GEO} alt="Georgia Flag" />
      </div>
    );
  } else {
    langName = (
      <div className="flag" onClick={() => changeLanguageHandler("sp")}>
        <img src={SP} alt="Spain Flag" />
      </div>
    );
  }

  const { t } = useTranslation();

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/"> {t("home")} </Link>{" "}
        </li>
        <li>
          <Link to="/about"> {t("about")} </Link>{" "}
        </li>
        <li>
          <Link to="/product"> {t("product")} </Link>{" "}
        </li>

        <li>
          <Link to="/login">{t("login")}</Link>
        </li>

        <li>
          <div onClick={closeBox} onMouseEnter={() => toggleBox(1)}>
            {langName}
            {openBox === 1 && (
              <div className="langpack">
                <div
                  onClick={() => changeLanguageHandler("en")}
                  className="flag"
                >
                  {" "}
                  <img src={US} alt="US Flag" />{" "}
                </div>
                <div
                  onClick={() => changeLanguageHandler("ge")}
                  className="flag"
                >
                  {" "}
                  <img src={GEO} alt="Georgia Flag" />{" "}
                </div>
                <div
                  onClick={() => changeLanguageHandler("sp")}
                  className="flag"
                >
                  {" "}
                  <img src={SP} alt="Spain Flag" />{" "}
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
