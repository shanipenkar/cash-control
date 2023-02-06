import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cashflow from "./pages/Cashflow";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import AddTransaction from "./pages/AddTransaction";
// import { TransactionProvider } from "./TransactionsContext";
// import DataContextProvider from "./DataContext";
import "./shared/styles.css";
function App() {

  return (
    // <DataContextProvider>
    <BrowserRouter baseName="/home">
      <section className="font-montserrat px-20 py-3">
      <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/cashflow" component={Cashflow} />
          <Route path="/addtransaction" component={AddTransaction} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </BrowserRouter>
    // </DataContextProvider>
  );
}

export default App;
