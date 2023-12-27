import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residences/>
      <Value/>
      <Contact/>
    </div>
  );
}

export default App;
