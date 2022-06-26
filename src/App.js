import HomePage from './components/HomePage';
import WebScraping from './PostPage/WebScraping';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';



function App() {
  return (

    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
      </Routes>
    </div>

  );
}

export default App;
