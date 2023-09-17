/** @jsxImportSource preact */
import { QRCodeSVG } from "qrcode.react";

export const QRCodeO = (prop: { url: string; }) => {
  return (
    <>
      <QRCodeSVG value={prop.url} />
    </>
  );
};

