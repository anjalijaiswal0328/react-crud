import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./containers/Users";
import UsersCreate from "./containers/UsersCreate";
import UsersDetail from "./containers/UsersDetail";
import UsersUpdate from "./containers/UsersUpdate";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/create" component={UsersCreate} />
          <Route exact path="/users/:id/update" component={UsersUpdate} />
          <Route exact path="/users/:id" component={UsersDetail} />

          <Redirect to="/users" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
