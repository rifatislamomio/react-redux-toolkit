import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from './pages/Post/post.page';
import 'normalize.css';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />}></Route>
      <Route exact path='/post' element={<PostPage />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);