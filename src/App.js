import logo from './logo.svg';
import './App.css';
import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import { Fragment } from 'react';

function App() {
  return (
   <div className='profile'>
    <ProfilePhoto />
    <FullName />
    <Adresse />
   </div>
  );
}
export default App;
