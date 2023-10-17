import React from 'react';
import Header from './views/Header/Header';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './views/MainLayout/MainLayout';
import './App.css';
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
