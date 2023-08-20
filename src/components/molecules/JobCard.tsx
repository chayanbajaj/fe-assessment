/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';

import Card from '../atoms/Card';
import Modal from '../organisms/Modal';
import ApplyNowButton from './ApplyNowButton';
import ExternalApplyButton from './ExternalApplyButton';

interface Job {
  id: string;
  jobTitle: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  minExperience: number;
  maxExperience: number;
  minSalary: number;
  maxSalary: number;
  totalEmployee: number;
  applyType: string;
}

const JobCard: React.FC<Job> = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteJob = async (id: string) => {
    try {
      await axios.delete(
        `https://64d60306754d3e0f136174e8.mockapi.io/api/v1/jobs/${id}`,
      );
      // eslint-disable-next-line no-alert
      alert('Job Deleted');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <Card>
      <div className="job-card-container">
        <div className="job-card-image">
          <img src="https://i.ibb.co/M6D77pQ/company-logo.png" alt="logo" />
        </div>
        <div className="job-card-content">
          <div className="job-title">{props.jobTitle}</div>
          <div className="company-industry">
            {props.companyName} - {props.industry}
          </div>
          <div className="job-location">{props.location}</div>
          <div className="extra-info">
            Part-Time (9.00 am - 5.00 pm IST) <br />
            Experience ({props.minExperience} - {props.maxExperience} years)
            <br />
            INR (₹) {props.minSalary} - {props.maxSalary} / Month <br />
            {props.totalEmployee} employees
          </div>
          {props.applyType === 'External Apply' ? (
            <ExternalApplyButton />
          ) : (
            <ApplyNowButton />
          )}
        </div>
        <div className="job-card-control">
          <button onClick={openModal}>
            <FontAwesomeIcon className="icon" icon={faEdit} color="#1597E4" />
          </button>
          <button onClick={() => deleteJob(props.id)}>
            <FontAwesomeIcon icon={faTrash} color="#1597E4" />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        isEdit
        editData={props}
      />
    </Card>
  );
};

export default JobCard;
