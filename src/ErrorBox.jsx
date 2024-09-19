import React from 'react';
import PropTypes from 'prop-types';

import "./ErrorBox.css";

export const ERROR_BOX_DURATION = 3000;

ErrorBox.propTypes = {
  message: PropTypes.string,
}

export default function ErrorBox({ message }) {
  return (
    <div>
      {message && (
        <div className="error-box">
          { message }
        </div>
      )}
    </div>
  )
}