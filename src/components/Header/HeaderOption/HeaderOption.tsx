import React from 'react';
import './HeaderOption.css';
import PropTypes, { InferProps } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { Tooltip } from '@material-ui/core';

export function HeaderOption({
  avatar,
  Icon,
  title,
  onClick,
}: InferProps<typeof HeaderOption.propTypes>) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Tooltip title="Logout" placement="top-start">
          <Avatar className="headerOption__icon" src={user?.profileUrl}>
            {user?.email[0]}
          </Avatar>
        </Tooltip>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

HeaderOption.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.any,
  avatar: PropTypes.bool,
  onClick: PropTypes.any,
};
