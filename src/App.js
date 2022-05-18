import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './component/AddTask';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import ViewTask from './component/ViewTask';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/add-task' element={
          <RequireAuth>
            <AddTask></AddTask>
          </RequireAuth>
        }></Route>
        <Route path='/view-task' element={
          <RequireAuth>
            <ViewTask></ViewTask>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
