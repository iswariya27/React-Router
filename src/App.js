import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopHeader from './TopNav/TopHeader';
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import Cyber from './components/Cyber';
import Career from './components/Career';
import {list} from './data';

function App() {
  
  return (
    <BrowserRouter>
    <div id="wrapper">
      <TopHeader />
      </div>
           <Routes>
            <Route path="/" element={<All item={list}/>}/>
            <Route path="/fullstack" element={<FullStack item={list}/>}/>
            <Route path="/datascience" element={<DataScience item={list}/>}/>
            <Route path="/cyber" element={<Cyber item={list}/>}/>
            <Route path="/career" element={<Career item={list}/>}/>
           </Routes>
   </BrowserRouter>
  );
}

export default App;
