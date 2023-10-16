import './App.css';
import Header from './views/Header/Header';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './views/MainLayout/MainLayout';
import { LanguageContext } from './context/LanguageContext';
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <MainLayout />
      </AuthProvider>
    </div>
  );
}

export default App;
