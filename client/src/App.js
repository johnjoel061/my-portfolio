import { useEffect, useState } from 'react';
import Home from "./pages/index"
import axios from "axios";
import Loader from './components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData } from './redux/rootSlice';


function App() {
  const {loading, portfolioData} = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data')
      dispatch(SetPortfolioData(response.data))
    } 
    
    catch (error) {
      console.log(error)
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
      {loading ? <Loader/>: null}
      <Home/>
    </div>
  );
}

export default App;
