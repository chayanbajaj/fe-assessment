import React from 'react';

import Button from '../atoms/Button';

const ExternalApplyButton: React.FC = () => {
  return (
    <Button
      className="rounded bg-blue-500 px-4 py-2 text-white"
      style={{
        color: '#1597E4',
        backgroundColor: '#FFFFFF',
        borderColor: '#1597E4',
        border: '1px solid',
      }}
    >
      External Apply
    </Button>
  );
};

export default ExternalApplyButton;
