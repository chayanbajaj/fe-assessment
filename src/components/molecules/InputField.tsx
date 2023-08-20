import type { InputHTMLAttributes } from 'react';
import React, { useEffect, useState } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  onInputChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  isRequired,
  onInputChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<
    string | number | readonly string[]
  >('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (onInputChange) {
      onInputChange(value);
    }
  };

  useEffect(() => {
    setInputValue(props.value || '');
  }, [props.value]);

  return (
    <div className="input-field">
      {label ? (
        <label className="label">
          {label} {isRequired ? <span className="asterisk">*</span> : ''}
        </label>
      ) : (
        <br />
      )}
      <input
        {...props}
        className="input"
        placeholder={props?.placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
