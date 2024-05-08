import React from 'react'

import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'

import requests from './services/requests'
import './assets/style/App.css'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
      />
      <Row title="Trendings Now" fetchUrl={requests.fetchTranding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentryMovies} />
    </div>
  )
}

export default App
