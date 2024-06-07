import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      product: "Product",
      phone : "Telephones"
    },
  },

  ge: {
    translation: {
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      product: "პროდუქტი",
      phone : "ტელეფონები"
    },
  },

  sp: {
    translation: {
      home: "hogar",
      about: "sobre",
      product: "producto",
      phone : "Los Telefonos"
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
