import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/UsersTable';

import UsersCreate from './components/UsersCreate';
import SearchAppBar from './components/AppBar';
import Form from './components/Userupdate';


function App() {
  
  return (
    <>
    <SearchAppBar></SearchAppBar>
      <Routes>
      <Route path='/' element={<Home></Home> } />
       <Route path='/create' element={<UsersCreate></UsersCreate> } />
       <Route path='/Edit/:id' element={ <Form></Form>} />
        
        
      </Routes>
    </>
  );
}

export default App;
