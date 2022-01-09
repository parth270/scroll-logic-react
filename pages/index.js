import React,{ useEffect, useRef, useState } from "react";
import Loader from "../components/Loader/Loader";
import classes from "../styles/Home.module.css";

export default function Home() {

  const div=useRef();
  const [scroll,setScroll]=useState(10);
  const [width,setWidth]=useState(100);

  useEffect(()=>{
    div.current.scrollLeft = div.current.scrollWidth;
    const Width = div.current.scrollLeft;
    setWidth(Width);
    console.log(Width);
    div.current.scrollLeft = 0;
  },[window.innerWidth]);

  const scrollHandler=(event)=>{
    setScroll(event.target.scrollLeft);
  }

  return (
    <div className={classes["bg-container"]}>
      <Loader scroll={scroll} width={width} />
      <div className={classes.container} id="a1" ref={div} onScroll={scrollHandler} >
        <div className={classes.box}>Hello!!</div>
        <div className={classes.box}>Hello!!</div>
        <div className={classes.box}>Hello!!</div>
        <div className={classes.box}>Hello!!</div>
        <div className={classes.box}>Hello!!</div>
        <div className={classes.box}>Hello!!</div>
        <div className={classes.box}>Hello!!</div>
        <div className={classes.box}>Hello!!</div>
      </div>
    </div>
  );
}
