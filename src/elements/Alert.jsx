import React, { useEffect } from 'react';
import { Alert as AlertB } from 'react-bootstrap';

const Alert = ({ text, variant, alertState, setAlertState }) => {

    useEffect(() => {
        let timer;
        if (alertState === true) {
            timer = setTimeout(() => {
                setAlertState(false);
            }, 3500);
        }

        return (() => {
            clearTimeout(timer)
        });
    }, [alertState, setAlertState]);

    return (
        <>
            <section className='position-absolute top-0 start-50 translate-middle-x'>
                <article className='pt-5'>
                    <AlertB show={alertState} variant={variant}>
                        <p style={{ fontSize: '22px', margin: '0 30px', textAlign: 'center' }}><b>{text}</b></p>
                    </AlertB>
                </article>
            </section>
        </>
    );
}

export default Alert;