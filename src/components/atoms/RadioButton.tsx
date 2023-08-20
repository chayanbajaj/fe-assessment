import type { InputHTMLAttributes } from 'react';
import React from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...props }) => {
  return (
    <label className="radio-button">
      <input type="radio" {...props} className="radio-input" />
      <span className="radio-label">{label}</span>
    </label>
  );
};

export default RadioButton;
