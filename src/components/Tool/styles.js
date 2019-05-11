import styled from "styled-components";
import { Red, Blue, Ink } from "../../utils/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  a {
    font-size: 24px;
    color: ${Blue};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-top: 30px;
  }

  .tags {
    margin-top: 20px;

    span {
      margin-right: 10px;
      font-size: 18px;
      font-weight: 600;
      color: ${Ink};

      &.highlight {
        background-color: #cff9e6;
      }
    }
  }
`;

export const SmallButton = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #feefee;
  padding: 6px 18px;
  right: 0;
  top: 8px;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: #fcd7d6;
  }

  &:active {
    background-color: #fcc6c5;
  }

  span {
    color: ${Red};
    font-weight: 600;
  }
`;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
