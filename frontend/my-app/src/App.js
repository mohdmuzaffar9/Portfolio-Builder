import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePortfolio from './CreatePortfolio';
import ViewPortfolio from './ViewPortfolio';
import LoginComponent from './logincomponent';



function App() {
  return (
   
   
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginComponent/>} />
        <ProtuctedRoute exact path="/dashbord" element={<CreatePortfolio />} />
        <ProtuctedRoute exact path="/view/:username" element={<ViewPortfolio />} /> */}
        <Route path="/" element={<LoginComponent/>} />
        <Route exact path="/dashbord" element={<CreatePortfolio />} />
        <Route exact path="/view" element={<ViewPortfolio />} />
      </Routes>
    </Router>
  
  );
}

export default App;
