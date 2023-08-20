import React from 'react';

import Button from '../atoms/Button';

const ApplyNowButton: React.FC = () => {
  return (
    <Button
      className="rounded bg-blue-500 px-4 py-2 text-white"
      style={{ backgroundColor: '#1597E4' }}
    >
      Apply Now
    </Button>
  );
};

export default ApplyNowButton;
