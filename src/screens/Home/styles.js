import styled from "styled-components";
import { LightInk } from "../../utils/Colors";
import checkboxOutline from "./assets/checkbox-blank-outline.svg";
import checkboxMarked from "./assets/checkbox-marked.svg";

export const Container = styled.div`
  width: 940px;
  margin: auto;
  padding-bottom: 100px;

  & > h1 {
    margin-top: 100px;
  }

  & > h3 {
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: row;

  label {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-left: 12px;
    height: 50px;
    cursor: pointer;

    input {
      margin: 0 6px 0 4px;
      border: none;
      -webkit-appearance: none;
      height: 28px;
      width: 28px;
      background: url(${checkboxOutline}) no-repeat center center;
      background-size: 28px;

      &:checked {
        background: url(${checkboxMarked}) no-repeat center center;
        background-size: 28px;
      }
    }

    span {
      font-size: 20px;
      margin-left: 5px;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin-top: 40px;
`;
