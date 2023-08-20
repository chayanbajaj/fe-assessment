import React from 'react';

import Button from '../atoms/Button';

interface CreateJobButtonProps {
  onClick: () => void;
}

const CreateJobButton: React.FC<CreateJobButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="rounded bg-blue-500 px-4 py-2 text-white"
      style={{ backgroundColor: '#1597E4' }}
      onClick={onClick}
    >
      Create Job
    </Button>
  );
};

export default CreateJobButton;
