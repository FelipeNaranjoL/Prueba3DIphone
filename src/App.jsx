import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSecction";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";


function App() {

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
