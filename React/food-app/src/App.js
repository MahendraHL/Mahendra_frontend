import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/organism/Home'
import Portfolio from './components/organism/Portfolio'
import About from './components/organism/About'
import Books from './components/organism/Books'
import Blog from './components/organism/Blog'
import Album from './components/organism/Album'
import Contact from './components/organism/Contact'

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Books" element={<Books/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Album" element={<Album/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      

    
    
    </div>
  );
}

export default App;
