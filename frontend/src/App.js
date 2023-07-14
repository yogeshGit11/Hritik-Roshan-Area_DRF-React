import Navbar from "./components/navbar";
import Intro from "./components/intro";
import { Route, Routes } from 'react-router-dom'
import FindMovies from "./components/FindMovies";
import Contact from "./components/contact"
import About from "./components/about";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path='/findmovies' element={<FindMovies />}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
