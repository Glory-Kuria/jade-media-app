import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
// import Blog from './Blog';
import Podcast from "./Podcast";
import Portfolio from "./Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      {/* <Blog/> */}
      <Podcast/>
      <Portfolio/>
     
    </div>
  
  );
}
export default App;
