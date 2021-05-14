import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/potato">
            <h1>감자</h1>
          </Route>
          <Route path="/banana">
            <h1>바나나</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
