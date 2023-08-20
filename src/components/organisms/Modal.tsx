/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-bitwise */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import InputField from '../molecules/InputField';
import ModalButton from '../molecules/ModalButton';
import RadioGroup from '../molecules/RadioGroup';

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEdit?: boolean;
  editData?: Job;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [stepNum, setStepNum] = useState(1);
  const [buttonName, setButtonName] = useState('Next');
  const [formData, setFormData] = useState({
    jobTitle: props?.editData?.jobTitle,
    companyName: props?.editData?.companyName || '',
    industry: props?.editData?.industry || '',
    location: props?.editData?.location || '',
    remoteType: props?.editData?.remoteType || '',
    minExperience: props?.editData?.minExperience || 0,
    maxExperience: props?.editData?.maxExperience || 0,
    minSalary: props?.editData?.minSalary || 0,
    maxSalary: props?.editData?.maxSalary || 0,
    totalEmployee: props?.editData?.totalEmployee || 0,
    applyType: props?.editData?.applyType || '',
  });

  useEffect(() => {
    setStepNum(1);
    setButtonName('Next');
  }, []);
  console.log(formData);
  const [mandatoryString, setMandatoryString] = useState<string>('');
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        props.onClose();
        setStepNum(1);
        setButtonName('Next');
      }
    };

    if (props.isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.isOpen, props.onClose]);

  if (!props.isOpen) {
    return null;
  }

  const handleFormSubmit = async () => {
    props.onClose();
    if (props?.isEdit) {
      try {
        const response = await axios.put(
          `https://64d60306754d3e0f136174e8.mockapi.io/api/v1/jobs/${props.editData?.id}`,
          formData,
        );
        if (response) alert('Job Updated');
      } catch (error) {
        console.error('Error updating job:', error);
      }
    } else {
      try {
        const response = await axios.post(
          'https://64d60306754d3e0f136174e8.mockapi.io/api/v1/jobs',
          formData,
        );
        if (response) alert('Job Posted');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const submitHandler = () => {
    if (stepNum === 1) {
      if (formData.jobTitle === '') {
        setMandatoryString('Job Title is mandatory');
        return;
      }
      if (formData.companyName === '') {
        setMandatoryString('Company Name is mandatory');
        return;
      }
      if (formData.industry === '') {
        setMandatoryString('Industry is mandatory');
        return;
      }
      setMandatoryString('');
      setStepNum(2);
      setButtonName('Save');
    } else {
      setStepNum(1);
      handleFormSubmit();
      setFormData({
        jobTitle: '',
        companyName: '',
        industry: '',
        location: '',
        remoteType: '',
        minExperience: 0,
        maxExperience: 0,
        minSalary: 0,
        maxSalary: 0,
        totalEmployee: 0,
        applyType: '',
      });
    }
  };

  // eslint-disable-next-line no-console
  console.log(formData);

  return (
    <div className="modal-backdrop">
      <div className="modal-center">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-heading">Create a job</span>
            <span className="modal-step-number"> Step {stepNum}</span>
          </div>
          {stepNum === 1 ? (
            <>
              <InputField
                label="Job title"
                placeholder="ex. UX UI Designer"
                isRequired
                value={props?.editData?.jobTitle || ''}
                onInputChange={(value) =>
                  setFormData({
                    ...formData,
                    jobTitle: value,
                  })
                }
              />
              <InputField
                label="Company Name"
                placeholder="ex. Google"
                isRequired
                value={props?.editData?.companyName || ''}
                onInputChange={(value) =>
                  setFormData({
                    ...formData,
                    companyName: value,
                  })
                }
              />
              <InputField
                label="Industry"
                placeholder="ex. Information Technology"
                isRequired
                value={props?.editData?.industry || ''}
                onInputChange={(value) =>
                  setFormData({
                    ...formData,
                    industry: value,
                  })
                }
              />
              <div className="modal-split">
                <InputField
                  label="Location"
                  placeholder="ex. Chennai"
                  value={props?.editData?.location || ''}
                  onInputChange={(value) =>
                    setFormData({
                      ...formData,
                      location: value,
                    })
                  }
                />
                <InputField
                  label="Remote Type"
                  placeholder="ex. In-office"
                  value={props?.editData?.remoteType || ''}
                  onInputChange={(value) =>
                    setFormData({
                      ...formData,
                      remoteType: value,
                    })
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div className="modal-split">
                <InputField
                  label="Experience"
                  placeholder="Minimum"
                  value={props?.editData?.minExperience}
                  onInputChange={(value) =>
                    setFormData({
                      ...formData,
                      minExperience: parseInt(value, 10),
                    })
                  }
                />
                <InputField
                  placeholder="Maximum"
                  value={props?.editData?.maxExperience}
                  onInputChange={(value) =>
                    setFormData({
                      ...formData,
                      maxExperience: parseInt(value, 10),
                    })
                  }
                />
              </div>
              <div className="modal-split">
                <InputField
                  label="Salary"
                  placeholder="Minimum"
                  value={props?.editData?.minSalary}
                  onInputChange={(value) =>
                    setFormData({
                      ...formData,
                      minSalary: parseInt(value, 10),
                    })
                  }
                />
                <InputField
                  placeholder="Maximum"
                  value={props?.editData?.maxSalary}
                  onInputChange={(value) =>
                    setFormData({
                      ...formData,
                      maxSalary: parseInt(value, 10),
                    })
                  }
                />
              </div>
              <InputField
                label="Total Employee"
                placeholder="Ex. 100"
                value={props?.editData?.totalEmployee}
                onInputChange={(value) =>
                  setFormData({
                    ...formData,
                    totalEmployee: parseInt(value, 10),
                  })
                }
              />
              <RadioGroup
                label="Apply Type"
                checkedValue={props?.editData?.applyType}
                values={['Quick Apply', 'External Apply']}
                onRadioChange={(value) =>
                  setFormData({
                    ...formData,
                    applyType: value,
                  })
                }
              />
            </>
          )}
          <div className="mandatory-string">{mandatoryString}</div>
          <div className="modal-button">
            <ModalButton buttonName={buttonName} onClick={submitHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
