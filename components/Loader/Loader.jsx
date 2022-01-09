import React from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {

  const btnHandler=()=>{
    
  }

  return (
    <div className={classes["bg-container"]}>
        <button className={classes.btn} onClick={btnHandler} >
            Increase
        </button>
      <div className={classes.container}>
        <div className={classes.loader} style={{ width: `${(props.scroll/props.width)*100}%` }} />
      </div>
    </div>
  );
};

export default Loader;