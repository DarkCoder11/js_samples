import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { Chart } from './containers';

const App = () => (
  <Provider store={store}>
    <div className='container'>
      <Chart />
    </div>
  </Provider>
);

export default App;
