import { StyledHeader } from './Response.styled';
import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <StyledHeader>
      {title}
      {children ? children : null}
    </StyledHeader>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.string,
};
