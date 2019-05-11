import styled from "styled-components";
import {
  Blue,
  DarkBlue,
  DarkerBlue,
  LighterBlue,
  Red,
  DarkRed,
  DarkerRed,
  LighterRed
} from "../../utils/Colors";

export const Container = styled.div`
  display: inline-flex;
  height: 35px;
  padding-left: 26px;
  padding-right: 26px;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => (props.disabled ? LighterBlue : Blue)};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 150ms ease-in-out;

  &:hover {
    background: ${props => (props.disabled ? LighterBlue : DarkBlue)};
  }

  &:active {
    background: ${props => (props.disabled ? LighterBlue : DarkerBlue)};
  }

  &.danger {
    background-color: ${props => (props.disabled ? LighterRed : Red)};

    &:hover {
      background: ${props => (props.disabled ? LighterRed : DarkRed)};
    }

    &:active {
      background: ${props => (props.disabled ? LighterRed : DarkerRed)};
    }
  }
`;

export const ButtonText = styled.span`
  color: white;
  font-weight: 600;
  letter-spacing: 1.5px;
`;
