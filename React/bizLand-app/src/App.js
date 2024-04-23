import './App.css';
import {Routes,Route} from 'react-router-dom'
import Portfolio from './components/Portfolio';
import Team from './components/Team'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio/>}></Route>
        <Route path="/Team" element={<Team/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
