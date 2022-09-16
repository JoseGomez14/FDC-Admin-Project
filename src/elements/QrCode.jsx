import React from 'react';
import qrcode from 'qrcode-generator';

const QrCode = ({ text, label }) => {
    let qr = qrcode(4, 'M');
    qr.addData(`http://192.168.20.29:3000/about/${text}`);
    qr.make();
    const qrImgUrl = qr.createDataURL(8);
    return (<>
        <div className='text-center py-3 px-5 rounded mx-auto'
             style={{ border: '2px solid #EEE'}}
            >
            <h4><b>{label}</b></h4>
            <img
                src={qrImgUrl} alt="Código QR" width='200px' /><br />
            <a
                className='text-decoration-none'
                href={qrImgUrl} download >Descargar QR</a>
        </div>
    </>);
}

export default QrCode;