import './App.css';

import {Link, Routes, Route, Navigate} from "react-router-dom";
import Create from './components/Create';
import Home from './components/Home';
import Show from './components/Show';
import ViewOne from './components/ViewOne';
import Update from './components/Update';


function App() {

  return (
    <div className="App">
      
      <Link to="/create">Create</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/show">Authors</Link>
      
      


      <Routes>
        {/*Create*/}
        <Route path='/create' element={<Create/>} />
        
        {/*Home*/}
        <Route path='/' element={<Home/>} /> 
        
        {/*Read All*/}
        <Route path='/show' element={<Show/>} />
        
        {/*Read One */}
        <Route path='/view/:id' element={<ViewOne/>} /> 
        
        {/*Update*/}
        <Route path='/update/:id' element={<Update/>} /> 
        
        
        
        {/*Redirect*/}
        <Route path='*' element={<Navigate to="/" replace/>} /> 
      </Routes>



    </div>
  );
}

export default App;
