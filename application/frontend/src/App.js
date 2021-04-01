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
import SearchBar from './components/SearchBar';
import SFSULogin from './pages/SFSULogin';
import TopBarNoMenu from './components/TopBarNoMenu';
import SFSUSignup from './pages/SFSUSignup';
import OwnerLogin from './pages/OwnerLogin';
import OwnerSignup from './pages/OwnerSignup';
import DriverLogin from './pages/DriverLogin';
import DriverSignup from './pages/DriverSignup';
import TopBarNoCart from './components/TopBarNoCart';
import Splash from './pages/Splash';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/about/rajdeep">
            <TopBarNoCart />
            <Rajdeep />
          </Route>
          <Route path="/about/rinay">
            <TopBarNoCart />
            <Rinay />
          </Route>
          <Route path="/about/bhavani">
            <TopBarNoCart />
            <Bhavani />
          </Route>
          <Route path="/about/frederick">
            <TopBarNoCart />
            <Frederick />
          </Route>
          <Route path="/about/german">
            <TopBarNoCart />
            <German />
          </Route>
          <Route path="/about/henzon">
            <TopBarNoCart />
            <Henzon />
          </Route>
          <Route path="/about">
            <TopBarNoCart />
            <About />
          </Route>
          <Route path="/sfsulogin">
            <TopBarNoMenu />
            <SFSULogin />
          </Route>
          <Route path="/sfsusignup">
            <TopBarNoMenu />
            <SFSUSignup />
          </Route>
          <Route path="/ownerlogin">
            <TopBarNoMenu />
            <OwnerLogin />
          </Route>
          <Route path="/ownersignup">
            <TopBarNoMenu />
            <OwnerSignup />
          </Route>
          <Route path="/driverlogin">
            <TopBarNoMenu />
            <DriverLogin />
          </Route>
          <Route path="/driversignup">
            <TopBarNoMenu />
            <DriverSignup />
          </Route>
          <Route path="/searchresults">
            <MenuSideBar />
            <SearchBar />
            <SearchResults />
          </Route>
          <Route path="/splash">
            <Splash />
          </Route>
          <Route path="/">
            <MenuSideBar />
            <SearchBar />
            <Home />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
