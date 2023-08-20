import React from 'react';

import Button from '../atoms/Button';

interface ModalButtonProps {
  onClick: () => void;
  buttonName: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick, buttonName }) => {
  return (
    <Button
      className="rounded bg-blue-500 px-4 py-2 text-white"
      style={{ backgroundColor: '#1597E4' }}
      onClick={onClick}
    >
      {buttonName}
    </Button>
  );
};

export default ModalButton;
