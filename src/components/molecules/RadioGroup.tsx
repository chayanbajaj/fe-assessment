import React, { useState } from 'react';

import RadioButton from '../atoms/RadioButton';

interface RadioGroupProps {
  label?: string;
  values?: string[];
  onRadioChange?: (selectedValue: string) => void;
  checkedValue?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    props?.checkedValue || '',
  );

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    if (props.onRadioChange) {
      props.onRadioChange(value);
    }
  };
  return (
    <div className="radio-group">
      <h4 className="radio-group-heading">{props?.label}</h4>
      <div className="radio-options">
        {props?.values?.map((value) => (
          <RadioButton
            label={value}
            name="applyType"
            value={value}
            key={value}
            checked={value === selectedValue}
            onChange={() => handleRadioChange(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
