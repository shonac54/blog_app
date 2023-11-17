import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import ViewBlog from './components/ViewBlog';
import ViewMyBlog from './components/ViewMyBlog';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='add' element={<AddBlog/>}/>
      <Route path='view' element={<ViewBlog/>}/>
      <Route path='viewmyblog' element={<ViewMyBlog/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
