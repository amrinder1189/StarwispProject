import './App.css';
import Menubar from './components/menubar'
import Notepad from './components/notepad'
import React,{useState} from 'react'
// import {ReactComponent as ReactLogo} from './';
// import { ReactComponent as YourSvg } from './svgg.svg';
import Chart from './components/chart'
import Shortchart from './components/short-chart'
import Inbox from './components/Inbox'
import Box from './components/box'
import Box2 from './components/box2'

import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

function App() {

  const [text,setText]=useState("");
  const [item,setItem]=useState(["Discription"]);
  const [titt,setTitt]=useState(["Title"]);
  const [title,setTitle]=useState("");

  return (
    <div className="App">
    <Menubar />
    <div className='divv'>
    <Chart/>
    <Shortchart />
    <Inbox/>
    <Box month={'This Month'} />
    <Box2 month={'Last Month'} />
    <Notepad text={text} setText={setText} item={item}setItem={setItem} title={title} setTitle={setTitle} titt={titt} setTitt={setTitt} />
    </div>
    </div>
  );
}

export default App;
