import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Kids from "./components/kids/kids";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/section6";
import Section7 from "./components/section7/section";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section5 />
      <Section6 />
      <Section7 />
      <Kids />
      <Footer />
    </div>
  );
}

export default App;
