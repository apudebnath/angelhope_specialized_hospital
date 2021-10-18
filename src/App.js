import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navigation from './Pages/Home/Header/Navbar/Navigation';
import Notfound from './Pages/Notfound/Notfound';
import Service from './Pages/Home/Service/Service';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import BookSpecialist from './Pages/BookSpecialist/BookSpecialist';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/serviceDetails/:ServiceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/bookSpecialist">
              <BookSpecialist></BookSpecialist>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
