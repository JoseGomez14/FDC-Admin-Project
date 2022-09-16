import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Confirm = ({show, setShow, setDeleteState}) => {
    const handleClose = () => {
        setShow(false)
        setDeleteState(false)
    };

    const handleAcept = () => {
        setShow(false)
        setDeleteState(true)
    }

    return (<>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Eliminar registro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                ¿Desea eliminar el registro de la especie de la base de datos de forma definitiva?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button variant="danger" onClick={handleAcept}>Eliminar</Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default Confirm;