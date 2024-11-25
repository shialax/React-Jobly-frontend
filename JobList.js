import React, { useContext, useState } from 'react';
import UserContext from '../UserContext';

function JobCard({ id, title, salary, equity, isApplied }) {
  const { currentUser } = useContext(UserContext);
  const [applied, setApplied] = useState(isApplied);

  const handleApply = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/jobs/${id}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        setApplied(true);
      } else {
        alert('Failed to apply for job.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {currentUser && (
        <button onClick={handleApply} disabled={applied}>
          {applied ? 'Applied' : 'Apply'}
        </button>
      )}
    </div>
  );
}

export default JobCard;
