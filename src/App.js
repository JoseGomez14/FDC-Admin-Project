import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        } />
        <Route path='/login' element={
          <Login />
        } />
        <Route path='/create' element={
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        } />
        <Route path='/edit/'>
          <Route path=':id' element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
