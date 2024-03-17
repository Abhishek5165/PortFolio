import React from "react";
import PDF from "../../images/resume.pdf";
import CallAction from "../shared/call-action/CallAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "./style.scss";

const Open = () => {
  const onButtonClick = () => {
    const pdfUrl = PDF;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Abhishek.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <button onClick={onButtonClick} className="download">
        <CallAction text="Download CV" icon={<AiOutlineCloudDownload />} />
      </button>
    </>
  );
};

export default Open;
