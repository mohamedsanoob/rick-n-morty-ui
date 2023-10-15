import './App.css';
import Header from './views/Header/Header'
import { AuthProvider } from './context/AuthContext';
import MainLayout from './views/MainLayout/MainLayout';
import { LanguageContext } from './context/LanguageContext';
import React, { useEffect, useState } from 'react';

function App() {
  const [currentLang, setCurrentLang] = React.useState("en");
  let [fetchedData, updateFetchedData] = useState([]);

  let api = `https://rickandmortyapi.com/api/character/?page=1`;
  console.log(api);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data.results)
      console.log(data.results);
    })();
  }, [api])

  return (
    <div className="App">
      <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
        <AuthProvider>
          <Header />
          <MainLayout results={fetchedData} />
        </AuthProvider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
