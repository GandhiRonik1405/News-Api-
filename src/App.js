import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>

        <Routes>
          <Route  path="/" element={<News key="general" pageSize={11} country="in" category="general"/>}/>
          <Route  path="/business" element={<News key="business" pageSize={11} country="in" category="business"/>}/>
          <Route  path="/entertainment"element={<News key="entertainment" pageSize={11} country="in" category="entertainment"/>}/>
          <Route  path="/general" element={<News key="general" pageSize={11} country="in" category="general"/>}/>
          <Route  path="/health" element={<News key="health" pageSize={11} country="in" category="health"/>}/>
          <Route  path="/science" element={<News key="science" pageSize={11} country="in" category="science"/>}/>
          <Route  path="/Sports" element={<News key="Sports" pageSize={11} country="in" category="Sports"/>}/>
          <Route  path="/technology" element={<News key="technology" pageSize={11} country="in" category="technology"/>}/>

          </Routes>
          </Router>     

      </div>

    )
  }
}

export default App
