import styled from 'styled-components';

export const Hero = styled.div`
  background: ${(props) => props.color.background};
  border: none;
  color: ${(props) => props.color.color};
  display: center;
  width: 100%;
  padding: 20px;
  margin-bottom: 50px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;
export const SubTitle = styled.div`y
padding: 20px;
`;
