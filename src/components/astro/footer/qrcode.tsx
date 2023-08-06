import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';

export const Buttons = () => {

    
  return (
    <div>
    <QRCodeSVG value={location.href} />
    </div>
    );
};
