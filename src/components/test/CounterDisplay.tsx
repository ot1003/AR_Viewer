/** @jsxImportSource preact */

import { useStore } from "@nanostores/preact";
import { counter } from "../../stores/counter";
import { QRCodeO } from "./qrcodearea";

const CounterDisplay = () => {
  const counterValue = useStore(counter);
  const pattern = /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/;

  return (
    <>
      {pattern.test(`${counterValue}`) ? (
        <>
          <QRCodeO url={`${counterValue}`}/>
        </>
      ) : (
        <>QRコードを表示できません😖</>
      )}
      ( {`${counterValue}`} )
    </>
  );
};

export default CounterDisplay;
