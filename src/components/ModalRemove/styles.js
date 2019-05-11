import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  position: relative;

  p {
    max-width: 340px;
    margin-top: 30px;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  cursor: pointer;
  right: -30px;

  svg {
    float: right;
    margin-right: 62px;
    background-color: transparent;
  }

  &:hover {
    svg {
      path {
        stroke: #726a83;
      }
    }
  }

  &:active {
    svg {
      path {
        stroke: #b3b0b9;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;
