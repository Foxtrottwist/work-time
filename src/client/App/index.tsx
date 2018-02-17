import * as React from 'react';
import * as styledComponents from 'styled-components';
import * as dateFns from 'date-fns';

import { Header } from './components/Header';

const { default: styled } = styledComponents;

const AppBox = styled.div`
  margin: auto;
  width: 100vw;
`;

interface AppProps {
  title?: string;
}

interface AppState {
  currentDay: string;
  currentTime: string;
  lastWeeksHours: string[];
  thisWeeksHours: string[];
}

class App extends React.Component<AppProps, AppState> {
  state = {
    currentDay: dateFns.format(new Date(), 'dddd MMMM DD'),
    currentTime: dateFns.format(new Date(), 'HH:mm:ss'),
    lastWeeksHours: ['stub'],
    thisWeeksHours: ['stub']
  };

  displayTIme(): void {
    const currentTime = dateFns.format(new Date(), 'HH:mm:ss');
    this.setState(() => ({ currentTime }));
  }

  componentDidMount() {
    setInterval(() => this.displayTIme(), 1000);
  }

  render() {
    return (
      <AppBox>
        <Header title="Let's Get to Work" {...this.state} />
      </AppBox>
    );
  }
}
export default App;
