import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "../src/AuthProvider/AuthProvider";
import "./App.css";
import DashBord from "./Pages/DashBord/DashBord/DashBord";
import Explore from "./Pages/Explore/Explore";
import CarGallery from "./Pages/Home/CarGallery/CarGallery";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import NavBar from "./Pages/Shared/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar />
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
            <Route path="/gellery">
              <CarGallery></CarGallery>
            </Route>
            <PrivetRoute path="/dash">
              <DashBord />
            </PrivetRoute>

            <PrivetRoute path="/purchase/:id">
              <Purchase />
            </PrivetRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/regi">
              <Register />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
