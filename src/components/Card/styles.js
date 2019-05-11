import styled from "styled-components";
import { DarkestWhite } from "../../utils/Colors";

const getShadow = number => {
  switch (number) {
    case 1:
      return "0 5px 7px rgba(0, 0, 0, 0.05)";
    case 2:
      return "0 10px 10px rgba(0, 0, 0, 0.05)";
    case 3:
      return "0 15px 20px rgba(0, 0, 0, 0.07)";
    case 4:
      return "0 20px 25px rgba(0, 0, 0, 0.1)";
    default:
      return "none";
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 8px;
  background: color;
  border: 1px solid ${DarkestWhite};
  background-color: white;
  box-shadow: ${props =>
    props.elevation ? getShadow(props.elevation) : "none"};
`;
