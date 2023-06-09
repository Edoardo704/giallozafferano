import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Alert = (props) => {
    return (
        <Modal
            {...props} size="lg" centered >
            <Modal.Body>
                <p>
                    {props.message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Alert;

