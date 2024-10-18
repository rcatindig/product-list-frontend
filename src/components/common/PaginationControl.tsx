import React from 'react';

interface PaginationControlProps {
  skip: number;
  total: number;
  onPageChange: (newSkip: number) => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({ skip, total, onPageChange }) => {
  return (
    <div className="pagination">
      <button disabled={skip === 0} onClick={() => onPageChange(skip - 10)}>
        Previous
      </button>
      <button disabled={skip + 10 >= total} onClick={() => onPageChange(skip + 10)}>
        Next
      </button>
    </div>
  );
};

export default PaginationControl;