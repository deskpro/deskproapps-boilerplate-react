import ReactDOM from 'react-dom';
import { DeskproAppContainer } from '@deskproapps/deskproapps-sdk-react';
import App from './App';

export function runApp(app) {
  ReactDOM.render(
    <DeskproAppContainer app={app} name={'Your app name'} mainComponent={App} />,
    document.getElementById('deskpro-app')
  );
}
