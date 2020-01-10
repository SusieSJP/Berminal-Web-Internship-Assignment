import React from 'react';
import DatePicker from 'react-mobile-datepicker';

const DobModal = (props) => {
  const dateConfig = {
    'year': {
      format: 'YYYY',
      step: 1
    },
    'month': {
      format: 'MM',
      step: 1
    },
    'date': {
      format: 'DD',
      step: 1
    }
  };

  return (
    <DatePicker
      theme='ios'
      isOpen={props.showDobModal}
      showHeader={false}
      confirmText='Confirm'
      cancelText='Cancel'
      onSelect={props.handleDobSelect}
      onCancel={props.handleDobSelect}
      min={new Date(1920, 0, 1)}
      max={new Date()}
      dateConfig={dateConfig}
    />
  );
};

export default DobModal;
