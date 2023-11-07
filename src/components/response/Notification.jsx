import { StyledNotification } from './Response.styled';
import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <StyledNotification>{message} </StyledNotification>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
