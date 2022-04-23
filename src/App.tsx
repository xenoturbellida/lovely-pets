import React from 'react';
import './App.module.sass';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "mobx-react";
import {MainPage} from "./pages/Main";
import mainStore from "./stores/main";


function App() {
  return (
      <BrowserRouter>
        <Provider {...mainStore}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
