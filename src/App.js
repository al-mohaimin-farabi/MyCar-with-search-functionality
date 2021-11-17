import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import Explore from "./Pages/Explore/Explore";
import Dashboard from "./Pages/DashBoard/DashBoard";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import BookingSuccess from "./Pages/BookingSuccess/BookingSuccess";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:carId">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/bookingSuccess">
              <BookingSuccess />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
