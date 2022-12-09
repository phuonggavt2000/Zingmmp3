import Modal from 'react-bootstrap/Modal';

function ModalSm({ onHide, smShow }) {
    return (
        <Modal size="sm" show={smShow} onHide={onHide} aria-labelledby="example-modal-sizes-title-sm" centered>
            <Modal.Header closeButton closeVariant="white" className="py-3">
                <Modal.Title className="fw-bold fs-5" id="example-modal-sizes-title-sm">
                    Dành Cho Tài Khoản Vip
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center py-0 pb-3 fs-6 text-secondary">
                Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để nghe bài hát này.
            </Modal.Body>
        </Modal>
    );
}

export default ModalSm;
