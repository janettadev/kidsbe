import "./App.scss";
import Footer from "./components/footer/footer";
import Kids from "./components/kids/kids";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/section6";
import Section7 from "./components/section7/section";
import Open from "./components/section#2/Open";
import Modern from "./components/modern/Modern";
import Lesson from "./components/lesson/Lesson";

function App() {
  return (
    <div className="App">
		<Open/>
    <Lesson/>
      <Section5 />
      <Section6 />
      <Section7 />
      <Modern/>
      <Kids />
      <Footer />
    </div>
  );
}

export default App;
