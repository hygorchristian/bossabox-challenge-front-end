import styled from "styled-components";
import {
  DarkerWhite,
  DarkestWhite,
  MostDarkestWhite,
  Ink,
  LightInk,
  LighterInk,
  Red,
  LightRed
} from "../../utils/Colors";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 20px;
  color: ${Ink};
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

export const Asterisco = styled.span`
  position: absolute;
  margin-top: 3px;
  margin-left: 9px;
  color: ${props => (props.error ? Red : LightInk)};
`;

export const ErrorMessage = styled.div`
  color: ${Red};
  font-size: 18px;
  width: 100%;
  margin: 8px 0 0 0;
  text-align: right;
`;

export const TextInput = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${props => (props.error ? Red : DarkestWhite)};
  background-color: ${props => (props.error ? "#FEEFEE" : DarkerWhite)};
  padding-left: 20px;
  justify-content: center;
  font-size: 20px;
  color: ${props => (props.error ? Red : Ink)};

  &::placeholder {
    color: ${props => (props.error ? LightRed : LighterInk)};
  }

  &:focus {
    background-color: ${DarkestWhite};
    border-color: ${MostDarkestWhite};
    color: ${Ink};
    outline: none;

    &::placeholder {
      color: ${LightInk};
    }
  }
`;

export const TextareaInput = styled.textarea`
  min-height: 120px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${props => (props.error ? Red : DarkestWhite)};
  background-color: ${props => (props.error ? "#FEEFEE" : DarkerWhite)};
  padding: 20px;
  justify-content: center;
  font-size: 20px;
  color: ${props => (props.error ? Red : Ink)};
  resize: none;

  &::placeholder {
    color: ${props => (props.error ? LightRed : LighterInk)};
  }

  &:focus {
    background-color: ${DarkestWhite};
    border-color: ${MostDarkestWhite};
    color: ${Ink};
    outline: none;

    &::placeholder {
      color: ${LightInk};
    }
  }
`;
