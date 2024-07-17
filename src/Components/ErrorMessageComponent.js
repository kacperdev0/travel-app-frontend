import React, { useState } from 'react';

const ErrorMessageComponent = ({message}) => {

  return (
    <div style={{color: "red"}}>
        {message}
    </div>
  );
};

export default ErrorMessageComponent;
