import React, { useState } from 'react';

import CreateJobButton from '@/components/molecules/CreateJobButton';
import JobsTable from '@/components/organisms/JobsTable';
import Modal from '@/components/organisms/Modal';

const Jobs = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="m-5 p-5">
      <CreateJobButton onClick={openModal} />
      <JobsTable />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export { Jobs };
