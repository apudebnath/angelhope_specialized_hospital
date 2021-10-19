import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Navigation from './Pages/Home/Header/Navbar/Navigation';
import Notfound from './Pages/Notfound/Notfound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import BookSpecialist from './Pages/BookSpecialist/BookSpecialist';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Home/Footer/Footer';
import About from './Pages/About/About';
import Community from './Pages/Community/Community';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/community">
                <Community></Community>
              </Route>
              <Route path="/aboutus">
                <About></About>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/serviceDetails/:ServiceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/bookSpecialist">
                <BookSpecialist></BookSpecialist>
              </Route>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
