import React from 'react';

interface TimeInputProps {
  // Add any props you need here
}

const TimeInput: React.FC<TimeInputProps> = () => {
  return (
    <input
      type="time"
      onChange={(e) => {
        // Handle time change
      }}
    />
  );
};

export default TimeInput;