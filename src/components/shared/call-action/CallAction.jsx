import React from "react";
import "./style.scss";
import CallIcon from "../callicon/CallIcon";

function CallAction({ text, icon, action}) {
  return (
    <div className="call-to-action" onClick={action}>
      <span className="text">{text}</span>
      {icon ? <div className="icon">{icon}</div> : <CallIcon />}
    </div>
  );
}

export default CallAction;
