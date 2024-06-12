import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      product: "Product",
      phone : "Telephones",
      login : "Log In"
    },
  },

  ge: {
    translation: {
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      product: "პროდუქტი",
      phone : "ტელეფონები",
      login : "შესვლა"
    },
  },

  sp: {
    translation: {
      home: "hogar",
      about: "sobre",
      product: "producto",
      phone : "Los Telefonos",
      login : "Acceso"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: `${localStorage.getItem("lang") || "ge"}`,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
