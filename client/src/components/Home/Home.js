import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../Common/header/Header"

function App() {
    return (
      <>
        <Router>
          <Header />
        </Router>
      </>
    );
  }
  
  export default App;