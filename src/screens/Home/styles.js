import styled from "styled-components";

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
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin-top: 40px;
`;
