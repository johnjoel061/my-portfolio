import { useEffect, useState } from 'react';
import './App.css';
import Home from "./pages/index"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData } from './redux/rootSlice';


function App() {
  // const [ShowLoading, setShowLoading] = useState(false);
  const {loading, portfolioData} = useSelector(state => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data')
      dispatch(SetPortfolioData(response.data))
    } 
    
    catch (error) {
      
    }
  }

  useEffect(() => {
    getPortfolioData();
  }, [])

  useEffect(() => {
    console.log(portfolioData);
  },[portfolioData])


  return (
    <div className="App">
      {loading ? <loader/> : null}
      <Home/>
    </div>
  );
}

export default App;
