import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Rajdeep from "./pages/Rajdeep";
import Rinay from "./pages/Rinay";
import Bhavani from "./pages/Bhavani";
import Frederick from "./pages/Frederick";
import German from "./pages/German";
import Henzon from "./pages/Henzon";
// import VPHome from "./pages/VPHome";
import Home from "./pages/Home";
import MenuSideBar from "./components/MenuSideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuSideBar />
        <Switch>
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
          <Route path="/home">
            {/* Root set to VP home page for M2 */}
            {/* <VPHome /> */}
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
