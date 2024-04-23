import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  width: 300px; // Or your desired width
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const ModalHeading = styled.h3`
  text-align: center;
  color: #333;
`;

const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SaveButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

const Modal = ({ onClose }) => {
    const [targetAmount, setTargetAmount] = useState('');
    const [presentAmount, setPresentAmount] = useState('');

    const handleSave = () => {
        // Here you would usually send the data to the server or
        // trigger an update to the state in the parent component.
        console.log('Saving data...', { targetAmount, presentAmount });
        onClose(); // Close the modal after saving data
    };

    return (
        <ModalBackdrop>
            <ModalContainer>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <ModalHeading>Target Amounts</ModalHeading>
                <InputLabel htmlFor="targetAmount">Target Amounts</InputLabel>
                <Input
                    id="targetAmount"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    placeholder="$500000"
                />
                <InputLabel htmlFor="presentAmount">Present Amounts</InputLabel>
                <Input
                    id="presentAmount"
                    value={presentAmount}
                    onChange={(e) => setPresentAmount(e.target.value)}
                    placeholder="Write present amounts here"
                />
                <SaveButton onClick={handleSave}>Save</SaveButton>
            </ModalContainer>
        </ModalBackdrop>
    );
};

export default Modal;
