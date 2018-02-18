import * as React from 'react';
import * as styledComponents from 'styled-components';

const { default: styled } = styledComponents;

const WatchFaceBox = styled.div`
  height: 15rem;
  width: 15rem;
  border: 0.1rem solid #0062a9;
  border-radius: 50%;
  box-shadow: 0.5px 0.5px 1.5px 0.5px #ccc;
  margin: 2rem auto 5rem auto;
  text-align: center;
`;

const Digits = styled.text`
  font-size: 3rem;
  text-align: center;
  line-height: 15rem;
  color: gray;
`;

interface WatchFaceProps {
  timer: string;
}

const WatchFace = ({ timer }: WatchFaceProps) => (
  <WatchFaceBox>
    <Digits>{timer}</Digits>
  </WatchFaceBox>
);

export default WatchFace;
