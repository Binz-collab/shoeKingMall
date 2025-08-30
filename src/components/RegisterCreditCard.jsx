import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form, Row, Col} from 'react-bootstrap';
import '../styles/pages/registerCreditCard.css';
import Group23Svg from '../assets/Group 23.svg';

const CardRegistrationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  // 카드 번호 각 부분의 상태를 관리하는 state
  const [cardNumberParts, setCardNumberParts] = useState(['', '', '', '']);
  // 비밀번호 앞 2자리를 위한 state 추가
  const [passwordParts, setPasswordParts] = useState(['', '']);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);
  
  // 사용자 입력을 처리하는 함수
  const handleCardNumberChange = (index, value) => {
    // 숫자가 아닌 문자 필터링
    const filteredValue = value.replace(/\D/g, '');

    // 해당 인덱스의 카드 번호 부분을 업데이트
    const newCardNumberParts = [...cardNumberParts];
    newCardNumberParts[index] = filteredValue;
    setCardNumberParts(newCardNumberParts);
  };

  
 // 비밀번호 입력 변경을 처리하는 함수
 const handlePasswordChange = (index, value) => {
   // 숫자가 아닌 문자 필터링 로직 추가
   const filteredValue = value.replace(/\D/g, '');
   const newPasswordParts = [...passwordParts];
   newPasswordParts[index] = filteredValue; // 필터링된 값 사용
   setPasswordParts(newPasswordParts);
 };

  const handleAddCard = () => {
    // 카드 추가 로직
    console.log('카드 추가 버튼 클릭');
  };

  const handleBack = () => {
    // 뒤로가기 로직
    console.log('뒤로가기 버튼 클릭');
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
    <Modal show={isModalOpen} onHide={handleClose} centered dialogClassName="custom-modal-width register-credit-card-modal">
      <Modal.Header closeButton>
        <button className="btn-back" onClick={handleBack}>
          <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.30425 1L1.36475 8.78658L9.15133 15.7261" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
        <Modal.Title>카드 추가</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <p className="text-center text-secondary mt-4 mb-3">
          새로운 카드를 등록해주세요.
        </p> */}
        <div 
          onClick={handleAddCard}
          className="add-card-box"
        >
          <svg viewBox="0 0 223 143" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-auto">
            <g filter="url(#filter0_d_1_265)">
            <rect x="2" y="2" width="213" height="133" rx="5" fill="#333333"/>
            </g>
            <path d="M27.6348 112.469V121H26.1641L22.3379 114.889V121H20.8672V112.469H22.3379L26.1758 118.592V112.469H27.6348ZM34.0145 113.605L31.4656 121H29.9246L33.1355 112.469H34.1199L34.0145 113.605ZM36.1473 121L33.5926 113.605L33.4812 112.469H34.4715L37.6941 121H36.1473ZM36.0242 117.836V119.002H31.3836V117.836H36.0242ZM40.4469 112.469H41.7594L44.2262 119.049L46.6871 112.469H47.9996L44.7418 121H43.6988L40.4469 112.469ZM39.8492 112.469H41.0973L41.3141 118.164V121H39.8492V112.469ZM47.3492 112.469H48.6031V121H47.1324V118.164L47.3492 112.469ZM57.1332 119.834V121H52.6039V119.834H57.1332ZM53.0199 112.469V121H51.5492V112.469H53.0199ZM56.5414 116.031V117.18H52.6039V116.031H56.5414ZM57.1039 112.469V113.641H52.6039V112.469H57.1039Z" fill="white"/>
            <path d="M153.2 112.469H154.513L156.979 119.049L159.44 112.469H160.753L157.495 121H156.452L153.2 112.469ZM152.602 112.469H153.85L154.067 118.164V121H152.602V112.469ZM160.102 112.469H161.356V121H159.886V118.164L160.102 112.469ZM164.9 112.469H166.213L168.679 119.049L171.14 112.469H172.453L169.195 121H168.152L164.9 112.469ZM164.302 112.469H165.55L165.767 118.164V121H164.302V112.469ZM171.802 112.469H173.056V121H171.586V118.164L171.802 112.469ZM179.571 112.469L176.248 121.732H175.141L178.469 112.469H179.571ZM182.704 112.469L184.685 116.541L186.665 112.469H188.294L185.423 117.859V121H183.941V117.859L181.07 112.469H182.704ZM191.346 112.469L193.326 116.541L195.307 112.469H196.936L194.064 117.859V121H192.582V117.859L189.711 112.469H191.346Z" fill="white"/>
            <rect x="16" y="49" width="40" height="26" rx="4" fill="#CBBA64"/>
            <defs>
            <filter id="filter0_d_1_265" x="0" y="0" width="223" height="143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="3" dy="3"/>
            <feGaussianBlur stdDeviation="2.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_265"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_265" result="shape"/>
            </filter>
            </defs>
          </svg>
        </div>

        <Form>
            <Form.Group className="mb-3">
                <Form.Label>카드 번호</Form.Label>
                <Row className="gx-3">
                {
                  cardNumberParts.map((part, index) => (
                  <Col key={index}>
                    <Form.Control
                      type={index < 2 ? "tel" : "password"} // 인덱스에 따라 type 변경
                      pattern="\d*"
                      maxLength={4}
                      className="text-center"
                      value={part} // Controlled component
                      onChange={(e) => handleCardNumberChange(index, e.target.value)}/>
                  </Col>
                  ))
                }
                  {/* {
                    Array.from({ length: 2 }, (_, index) => (
                    <Col key={index}>
                      <Form.Control type="tel" pattern="\d*" maxLength={4} className="text-center"/>
                    </Col>
                    ))
                  }
                  {
                    Array.from({ length: 2 }, (_, index) => (
                    <Col key={index}>
                      <Form.Control type="password" maxLength={4} className="text-center"/>
                    </Col>
                    ))
                  } */}
                </Row>
            </Form.Group>

            <Row>
                <Col xs={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>만료일</Form.Label>
                        <Form.Control placeholder="MM/YY" maxLength={5} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>카드 소유자 이름</Form.Label>
                <Form.Control placeholder="카드에 표시된 이름과 동일하게 입력하세요." maxLength={30} />
            </Form.Group>

            
            <Form.Group className="mb-3">
                <Form.Label>보안코드 (CVC/CVV)</Form.Label>
                {/* <Form.Control placeholder="000" maxLength={5} /> */}
                <Row className='gx-5 align-items-center'>
                {
                  [0,1,2].map((a) => {
                      return (
                          <Col xs={1} key={a}>
                              <Form.Control type="tel" maxLength={1} className="text-center password-input-width"/>
                          </Col>
                      )
                  })
                }
                  <Col>
                    <img src={Group23Svg} alt="CVC Info" className="ms-3"/>
                  </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>비밀번호</Form.Label>
                <Row className='gx-5'>
                  {
                   // [1,2,3,4] 대신 [0,1,2,3]을 사용하면 인덱스 처리가 더 직관적입니다.
                   // 여기서는 기존의 [1,2,3,4]를 유지하고 인덱스를 조정합니다.
                   [1,2,3,4].map((index) => {
                       const isActualInput = index <= 2; // 첫 입력 필드
                       // 실제 입력 필드일 경우 state 값, 아니면 모자이크 문자 '•' 표시
                       const displayValue = isActualInput ? passwordParts[index - 1] : '•';
                       const isMaskedAndReadOnly = !isActualInput; // 읽기 전용 여부
 
                       return (
                           <Col xs={1} key={index}>
                               <Form.Control
                                   type="password"
                                   maxLength={1}
                                   // isMaskedAndReadOnly가 true일 때 masked-password-field 클래스 추가
                                   className={`text-center password-input-width ${isMaskedAndReadOnly ? 'masked-password-field' : ''}`}
                                   //2개는 읽기 전용 아님, 뒤 2개는 읽기 전용
                                   readOnly={!isActualInput} 
                                   value={displayValue}
                                   // 실제 입력 필드일 경우에 onChange 핸들러 연결
                                   onChange={isActualInput ? (e) => handlePasswordChange(index - 1, e.target.value) : undefined}
                                   tabIndex={isMaskedAndReadOnly ? -1 : undefined} // 탭 순서에서 제외
                                />
                           </Col>
                       )
                   })
                }
                </Row>
            </Form.Group>
        </Form>

      </Modal.Body>
    </Modal>
  );
};

export default CardRegistrationModal;