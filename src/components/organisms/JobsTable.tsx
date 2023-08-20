/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import JobCard from '../molecules/JobCard';

interface Job {
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
  id: string;
}
const JobsTable: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isComponentFocused, setComponentFocused] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handleFocusChange = () => {
      setComponentFocused(document.hasFocus());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('focus', handleFocusChange);
      window.addEventListener('blur', handleFocusChange);

      return () => {
        window.removeEventListener('focus', handleFocusChange);
        window.removeEventListener('blur', handleFocusChange);
      };
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://64d60306754d3e0f136174e8.mockapi.io/api/v1/jobs',
        );
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchData();
  }, [isComponentFocused]);
  return (
    <div className="m-5 p-5">
      {jobs.map((job) => {
        return (
          <JobCard
            key={job.id}
            id={job.id}
            applyType={job.applyType}
            companyName={job.companyName}
            industry={job.industry}
            jobTitle={job.jobTitle}
            location={job.location}
            maxExperience={job.maxExperience}
            minExperience={job.minExperience}
            maxSalary={job.maxSalary}
            minSalary={job.minSalary}
            remoteType={job.remoteType}
            totalEmployee={job.totalEmployee}
          />
        );
      })}
    </div>
  );
};

export default JobsTable;
