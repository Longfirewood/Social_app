import React from "react";
import { Toast, ToastHeader, ToastBody, Button } from "reactstrap";
import c from "./Toast.module.css";

const ToastComponent = (props) => {
  const { toastList, position } = props;
  return (
    // <div>
    //   <Toast>
    //     <ToastHeader icon="primary" toggle={function noRefCheck() {}}>
    //       <strong className="me-auto">Hey Hey</strong>
    //     </ToastHeader>
    //     <ToastBody>
    //       This is a toast with a primary icon — check it out!
    //     </ToastBody>
    //   </Toast>
    // </div>
    <div className={`c.notification-container ${position}`}>
      <div className={`c.notification toast ${position}`}>
        <button>X</button>
        <div className="notification-image">
          <img src="" alt="" />
        </div>
        <div>
          <p className="notification-title">Title</p>
          <p className="notification-message">Message</p>
        </div>
      </div>
    </div>
  );
};

export default ToastComponent;
