import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import IndiaTab from "./components/IndiaTab";
import Corona from './components/Corona';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/corona" component={Corona} />
        <Route exact path="/indiatab" component={IndiaTab} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
