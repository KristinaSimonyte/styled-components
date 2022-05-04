import styled from "styled-components";

export const Button = styled.button`
  border-radius: 0.3rem;
  border: none;
  background: ${(props) => props.color.background};
  color: ${(props) => props.color.color};
  cursor: pointer;
  padding: 1.5rem;
  margin: 5px;
  font-size: 25px;
`;