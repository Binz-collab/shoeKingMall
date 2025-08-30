import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/pages/registerCreditCard.css';

const CardRegistrationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  const handleAddCard = () => {
    // 카드 추가 로직
    console.log('카드 추가 버튼 클릭');
  };

  

  // The button to open the modal, rendered when the modal is closed.
  if (!isModalOpen) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <Button variant="primary" onClick={handleShow}>
          보유카드 모달 열기
        </Button>
      </div>
    );
  }

  return (
    // The `show` prop controls visibility, and `onHide` handles closing.
    // `centered` vertically centers the modal.
    <Modal show={isModalOpen} onHide={handleClose} centered dialogClassName="custom-modal-width">
      <Modal.Header closeButton>
        
        <Modal.Title>보유카드</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center text-secondary mt-4 mb-3">
          새로운 카드를 등록해주세요.
        </p>
        <div 
          onClick={handleAddCard}
          className="add-card-box"
        >
          <svg className="w-24 h-auto opacity-50" viewBox="0 0 208 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="208" height="123" rx="5" fill="#E5E5E5"/>
            <path d="M105.304 61.1884H111.251V63.7519H105.304V70.4902H102.579V63.7519H96.6318V61.1884H102.579V54.9628H105.304V61.1884Z" fill="#575757"/>
          </svg>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CardRegistrationModal;