import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {

  return (
    <div className={classes["bg-container"]}>
      <div className={classes.container}>
        <div className={classes.loader} style={{ width: `${(props.scroll/props.width)*100}%` }} />
      </div>
    </div>
  );
};

export default Loader;