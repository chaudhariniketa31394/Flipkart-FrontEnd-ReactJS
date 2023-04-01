import './App.css';

//material import
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider';
//components
import Header from './components/header/Header';
import Home from './components/home/home';
import DetailView from './components/details/DetailsView'
import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:pid' element={<DetailView/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
