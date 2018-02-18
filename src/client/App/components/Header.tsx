import * as React from 'react';
import * as StyledComponents from 'styled-components';

const { default: styled } = StyledComponents;

const HeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0079bf;
  height: 20vh;
  margin-top: 1rem;
  border-top: 0.3rem solid #00a5e3;
  box-shadow: 3px 3px 5px 0px #ccc;
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ color = '#8ED6EA' }) => color};
`;

const Today = Title.extend`
  font-size: 1.5rem;
`;

const Time = Title.extend`
  font-size: 5rem;
`;

interface HeaderProps {
  title: string;
  color?: string;
  currentDay: string;
  currentTime: string;
}

const Header = ({ title, color, currentDay, currentTime }: HeaderProps) => (
  <HeaderBox>
    <Title color={color}>{title}</Title>
    <Today color={color}>{currentDay}</Today>
    <Time color={color}>{currentTime}</Time>
  </HeaderBox>
);

export default Header;
