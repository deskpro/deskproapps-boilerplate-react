import ReactDOM from 'react-dom';
import App from './App';

export function runApp(app) {
  ReactDOM.render(<App dpapp={app} />, document.getElementById('deskpro-app'));
}