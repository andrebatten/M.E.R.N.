import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import Create from './components/Create';
import Show from './components/Show';
import ViewOne from './components/ViewOne';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Link to="/create">Create</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/show">Pirates</Link>
      

      <Routes>
      {/*Create*/}
      <Route path='/create' element={<Create/>} />
      {/*Read All*/}
      <Route path='/show' element={<Show/>} />
      {/*Read One */}
      <Route path='/view/:id' element={<ViewOne/>} /> 
      {/*Home*/}
      <Route path='/' element={<Home/>} />
      </Routes>


    </div>
  );
}

export default App;
