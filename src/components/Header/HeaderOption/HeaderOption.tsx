import React from 'react';
import './HeaderOption.css';
import PropTypes, { InferProps } from 'prop-types';

export function HeaderOption({
  Icon,
  title,
}: InferProps<typeof HeaderOption.propTypes>) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

HeaderOption.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.any,
};
