import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Cashflow from "./pages/Cashflow";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter baseName="/home">
      <section className="bg-[#658864] px-20 py-3">
        <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/cashflow" component={Cashflow} />
        <Route component={NotFound} />
      </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;

// <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
