import Navbar from "./Navbar"
import LandingPage from "./LandingPage"
import Podcast from "./Podcast";
import Portfolio from "./Portfolio";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Podcast/>
      <Portfolio/>
     
    </div>
  );
}

export default App;
