import './App.css';
import Hero from './components/Hero';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import Blocks from './pages/Blocks.jsx'
import Contracts from './pages/Contracts.jsx'
import Nodes from './pages/Nodes.jsx'
import Stats_Graphs from './pages/Stats & Graphs.jsx'
import Validators from './pages/Validators.jsx'
// import Tokens from './pages/Tokens.jsx'
import Transactions from './pages/Transactions.jsx'
import Faucet from './pages/Faucet.jsx';
import Assests from './pages/Assests.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path='/' 
        element = {< Dashboard />}
        />
        <Route  path='/blocks' 
        element = {<Blocks />}
        />
        <Route  path='/contracts' 
        element = {< Contracts />}
        />
        <Route  path='/nodes' 
        element = {< Nodes />}
        />
        <Route  path='/assests' 
        element = {< Assests />}
        />
        <Route  path='/transactions' 
        element = {< Transactions />}
        />
        <Route  path='/validators' 
        element = {< Validators />}
        />
        <Route  path='/stats' 
        element = {< Stats_Graphs />}
        />
        <Route  path='/faucet' 
        element = {< Faucet />}
        />
      </Routes>
      {/* <Home /> */}
      {/* <Dashboard /> */}
      
      
    </div>
  );
}

export default App;
