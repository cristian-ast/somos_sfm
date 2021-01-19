import React from 'react';
import BaseDatosProvider from './context/BaseDatosContext';
import AnunciosProvider from './context/AnunciosContext';
import AppHome from './components/appHome/AppHome';

function App() {
  return (
    <BaseDatosProvider>
      <AnunciosProvider>
        <AppHome />
      </AnunciosProvider>
    </BaseDatosProvider>
  );
}

export default App;