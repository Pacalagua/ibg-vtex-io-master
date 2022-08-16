import React from "react";
import linkStyles from "./style.css";


const WrapperShelf = ({ children }) => {
  return <div className={linkStyles.block}>{children}</div>;
};
export default WrapperShelf;
