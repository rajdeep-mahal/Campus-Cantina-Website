import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Rajdeep from "./pages/Rajdeep";
import Rinay from "./pages/Rinay";
import Bhavani from "./pages/Bhavani";
import Frederick from "./pages/Frederick";
import German from "./pages/German";
import Henzon from "./pages/Henzon";
import VPHome from "./pages/VPHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/rajdeep">
            <Rajdeep />
          </Route>
          <Route path="/rinay">
            <Rinay />
          </Route>
          <Route path="/bhavani">
            <Bhavani />
          </Route>
          <Route path="/frederick">
            <Frederick />
          </Route>
          <Route path="/german">
            <German />
          </Route>
          <Route path="/henzon">
            <Henzon />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {/* Root set to VP home page for M2 */}
            <VPHome />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
