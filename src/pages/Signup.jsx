import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { SignupForm } from '../components';

function Signup() {
  return (
    <Modal show backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">회원가입페이지</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignupForm />
      </Modal.Body>
    </Modal>
  );
}
export default Signup;
