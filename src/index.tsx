import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('wrapper')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // 型キャストしないと怒られるため
    const NextApp = (require('./components/App') as any).default;
    render(NextApp);
  });
}
