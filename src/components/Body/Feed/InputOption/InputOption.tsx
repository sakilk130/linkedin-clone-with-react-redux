import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from 'styled-components';

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
    <InputOptionContainer>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </InputOptionContainer>
  );
}
const InputOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: gray;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    border-radius: 15px;
  }
  & > h4 {
    margin-left: 5px;
  }
`;
export default InputOption;
