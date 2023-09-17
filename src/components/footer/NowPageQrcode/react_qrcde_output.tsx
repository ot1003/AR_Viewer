import ReactDOM from "react-dom";
import { useQRCode } from "next-qrcode";
import { useRef, useState, useEffect } from "react";
import { MDCTextField } from "@material/textfield";
import React from "react";
import { useStore } from "@nanostores/react";
import { qrcodeURI,counter } from "../../../stores/qrcodeTS";

const Buttons = (prop: { url: string }) => {
  const $qrcodeURIValue = useStore(qrcodeURI);
  const counterValue = useStore(counter);

  const { SVG } = useQRCode();
  return (
    <>
      {counterValue}
    </>
  );
};
export default Buttons;
