import React from 'react';
import './InputOption.css';
import PropTypes, { InferProps } from 'prop-types';

InputOption.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.any,
  color: PropTypes.string.isRequired,
};

function InputOption({
  title,
  Icon,
  color,
}: InferProps<typeof InputOption.propTypes>) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
