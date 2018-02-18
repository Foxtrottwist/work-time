import * as React from 'react';
import * as styledComponents from 'styled-components';

import WatchFace from './WatchFace';

const { default: styled } = styledComponents;

const TimerBox = styled.div`
  height: 30rem;
  width: 20rem;
  border: 0.3rem solid #0079bf;
  border-radius: 5%;
  box-shadow: 1px 1px 5px 0px #ccc;
  margin: 5rem auto 0 auto;
`;

const ButtonBox = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

export const Button = styled.button`
  height: 2rem;
  width: 6rem;
  background-color: #fff;
  border: 0.1rem solid #0062a9;
  border-radius: 1rem;
  box-shadow: 0.5px 0.5px 1.5px 0.5px #ccc;
  cursor: pointer;
  color: #0062a9;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

interface TimerProps {
  timer: string;
}

const Timer = (props: TimerProps) => (
  <TimerBox>
    <WatchFace {...props} />
    <ButtonBox>
      <Button type="button">Start</Button>
      <Button type="button">Stop</Button>
    </ButtonBox>
  </TimerBox>
);

export default Timer;
