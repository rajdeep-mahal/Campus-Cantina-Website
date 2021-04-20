import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Rajdeep from './pages/About/Rajdeep';
import Rinay from './pages/About/Rinay';
import Bhavani from './pages/About/Bhavani';
import Frederick from './pages/About/Frederick';
import German from './pages/About/German';
import Henzon from './pages/About/Henzon';
//import VPHome from "./pages/VPHome";
import Home from './pages/Home';
import MenuSideBar from './components/MenuSideBar';
import SearchResults from './pages/SearchResults';
import SFSULogin from './pages/SFSULogin';
import SFSUSignup from './pages/SFSUSignup';
import OwnerLogin from './pages/OwnerLogin';
import OwnerSignup from './pages/OwnerSignup';
import OwnerEditProfile from './pages/Owner/OwnerEditProfile';
import OwnerProfile from './pages/Owner/OwnerProfile';
import OwnerOrderHistory from './pages/Owner/OwnerOrderHistory';
import OwnerMenu from './pages/Owner/OwnerMenu';
import DriverLogin from './pages/DriverLogin';
import DriverSignup from './pages/DriverSignup';
import Splash from './pages/Splash';

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuSideBar />
        <Switch>
          <Route path="/searchresults">
            <SearchResults />
          </Route>
          <Route path="/about/rajdeep">
            <Rajdeep />
          </Route>
          <Route path="/about/rinay">
            <Rinay />
          </Route>
          <Route path="/about/bhavani">
            <Bhavani />
          </Route>
          <Route path="/about/frederick">
            <Frederick />
          </Route>
          <Route path="/about/german">
            <German />
          </Route>
          <Route path="/about/henzon">
            <Henzon />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sfsulogin">
            <SFSULogin />
          </Route>
          <Route path="/sfsusignup">
            <SFSUSignup />
          </Route>
          <Route path="/ownerlogin">
            <OwnerLogin />
          </Route>
          <Route path="/ownersignup">
            <OwnerSignup />
          </Route>
          <Route path="/owner/editprofile">
            <OwnerEditProfile />
          </Route>
          <Route path="/owner/profile">
            <OwnerProfile />
          </Route>
          <Route path="/owner/orders">
            <OwnerOrderHistory />
          </Route>
          <Route path="/owner/menu">
            <OwnerMenu />
          </Route>
          <Route path="/driverlogin">
            <DriverLogin />
          </Route>
          <Route path="/driversignup">
            <DriverSignup />
          </Route>
          <Route path="/splash">
            <Splash />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
