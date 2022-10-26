import "./App.scss";
import { About, Home, Navbar, Services, Skills } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </div>
  );
}

export default App;
