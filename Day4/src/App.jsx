import React from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
// import TextField from './components/TextFields/TextField';

// Pages
import TextFieldDemo from './pages/TextFieldDemo/TextFieldDemo';

function App() {
  return (
    <Router>
      <Route path="/" component={TextFieldDemo} />
    </Router>
  );
  // return (
  //   <TextField value="hello" />
  // );
}

export default App;
