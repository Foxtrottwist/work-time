import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

// tslint:disable-next-line
injectGlobal`
    * { margin: 0; padding: 0; }
`;

ReactDOM.render(<App />, document.getElementById('app'));
