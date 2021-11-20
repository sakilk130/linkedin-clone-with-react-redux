import React from 'react';
import './HeaderOption.css';
import PropTypes, { InferProps } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

export function HeaderOption({
  avatar,
  Icon,
  title,
}: InferProps<typeof HeaderOption.propTypes>) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

HeaderOption.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.any,
  avatar: PropTypes.string,
};
