import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from './pages/Post/post.page';
import 'normalize.css';
import { store } from "./store/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/post' element={<PostPage />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);