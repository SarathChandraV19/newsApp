import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import IndiaTab from "./components/IndiaTab";
import Corona from './components/Corona';
import CoronaV2 from './components/CoronaV2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/corona" component={CoronaV2} />
        <Route exact path="/indiatab" component={IndiaTab} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
