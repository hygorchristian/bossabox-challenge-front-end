import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 20px;
  color: #170c3a;
  margin-bottom: 20px;
`;

export const TextInput = styled.input`
  height: 50px;
  min-width: 400px;
  border-radius: 5px;
  border: 1px solid ${props => (!props.error ? "#ebeaed" : "#F95E5A")};
  background-color: ${props => (!props.error ? "#F5F4F6" : "#FEEFEE")};
  padding-left: 20px;
  justify-content: center;
  font-size: 20px;
  color: ${props => (!props.error ? "#170c3a" : "#F95E5A")};

  &::placeholder {
    color: #b1adb9;
  }

  &:focus {
    background-color: #ebeaed;
    border-color: #dedce1;
    outline: none;

    &::placeholder {
      color: #8f8a9b;
    }
  }
`;
