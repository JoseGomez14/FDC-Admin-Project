import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import  Main from './components/main/Main';
import Login from './components/login/Login';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Main/>
        }/>
        <Route path='/login' element={
          <Login/>
        }/>
        <Route path='/create' element={
          <Create/>
        }/>
        <Route path='/edit/'>
          <Route path=':id' element={
            <Edit/>
          }/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
