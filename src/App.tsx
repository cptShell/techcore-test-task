import { FC } from 'react';
import { AppNavigation } from './components/app-navigation/app-navigation';
import { Settings } from './components/settings/settings';
import 'antd/dist/antd.css';
import './assets/styles/variables.css';
import './App.scss';

const App: FC = () => (
  <>
    <AppNavigation />
    <Settings />
  </>
);

export default App;
