import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/footer";
import Publications from "./components/publications/publications";
import Experience from "./components/experience/experience";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <Skills />
      <Publications />
      <Footer />
    </>
  );
}

export default App;
