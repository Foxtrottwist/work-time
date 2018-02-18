import * as React from 'react';
import * as styledComponents from 'styled-components';
import * as dateFns from 'date-fns';

import Header from './components/Header';
import Timer from './components/Timer';

const { default: styled } = styledComponents;

const AppBox = styled.div`
  margin: auto;
  width: 100vw;
`;

interface AppState {
  currentDay: string;
  currentTime: string;
  timer: string;
  lastWeeksHours: string[];
  thisWeeksHours: string[];
}

class App extends React.Component<{}, AppState> {
  state = {
    currentDay: dateFns.format(new Date(), 'dddd MMMM DD'),
    currentTime: dateFns.format(new Date(), 'HH:mm'),
    timer: '00:00:00',
    lastWeeksHours: ['stub'],
    thisWeeksHours: ['stub']
  };

  displayTIme(): void {
    const currentTime = dateFns.format(new Date(), 'HH:mm');
    this.setState(() => ({ currentTime }));
  }

  componentDidMount() {
    setInterval(() => this.displayTIme(), 1000);
  }

  render() {
    return (
      <AppBox>
        <Header title="Let's Get to Work" {...this.state} />
        <Timer timer={this.state.timer} />
      </AppBox>
    );
  }
}
export default App;
