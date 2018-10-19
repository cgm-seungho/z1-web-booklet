import * as React from "react";
import Introduce from "./components/Introduce/Introduce";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={MainPage}/>
          <Route exact={true} path="/intro" component={Introduce}/>
          {/* <Route exact={true} path="/history" component={History}/> */}
        </div>
      </Router>
    );
  }
}

export default App;