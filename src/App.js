import logo from './logo.svg';
import './App.css';

import Home from './Home/Home';
import MyPortfolio from './Portfolio/portfolio';
import MyInformation from './MyInformation/Info';
import MyFooter from './Footer';

function App() {
  return (
    <div >
      <Home/>
      <MyPortfolio/>
      <MyInformation/>
    </div>
  );
}

export default App;
