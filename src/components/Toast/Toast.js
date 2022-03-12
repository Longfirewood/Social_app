import React, { useState, useEffect } from "react";
import { Toast, ToastHeader, ToastBody, Button } from "reactstrap";
import c from "./Toast.module.css";
//import checkIcon from "./assets/check.svg";

const ToastComponent = (props) => {
  const { toastList } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <div
      style={{
        backgroundColor: toastList.backgroundcolor,
        fontSize: "14px",
        boxSizing: "border-box",
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zindex: "10000",
        padding: "20px 15px 10px 10px",
        borderRadius: "10px",
        opacity: "0.9",
      }}
      //className={`${c.notification_container} background-color=${toastList.backgroundcolor}`}
    >
      <span>
        <button>X</button>
        <span className={c.notification_title}>{toastList.title}</span>
        <div className={c.notification_message}> {toastList.message} </div>
      </span>
    </div>
  );
};

export default ToastComponent;
