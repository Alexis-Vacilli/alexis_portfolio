import "./App.scss";
import {
  About,
  Footer,
  Home,
  Navbar,
  Portfolio,
  Services,
  Skills,
  Testimonials,
} from "./components/index";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Testimonials />
          <Portfolio />
          <Footer />
        </main>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
