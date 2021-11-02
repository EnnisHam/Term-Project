import "./App.css";
import {Timesheet }from "./components/Timesheet/timesheet";
import Home from "./components/Home/home";
import {AdminDashboard} from './components/AdminDashboard/adminDashboard'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    //  <CheckIn></CheckIn>
    <BrowserRouter>
      <Switch>
        <Route path="/checkin">
          <Timesheet />
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
