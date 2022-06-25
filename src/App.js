import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
