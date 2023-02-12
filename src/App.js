import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cashflow from "./pages/Cashflow";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Authentication from "./pages/Authentication";
import AddTransaction from "./pages/AddTransaction";
import {LoginContextProvider} from './LoginContext';
import "./shared/styles.css";
function App() {
  return (
    <LoginContextProvider>
      <BrowserRouter baseName="/home">
        <section className="font-montserrat px-20 py-3">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/auth" component={Authentication} />
            <Route path="/cashflow" component={Cashflow} />
            <Route path="/addtransaction" component={AddTransaction} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
