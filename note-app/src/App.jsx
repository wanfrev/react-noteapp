import './assets/css/app.css'
import { Nav } from './components/Nav'
import { Card } from './components/Card'
import { AddNote } from './components/AddNote'

function App() {

  return (
    <>
      <div className='app'>
        <Nav />
        <div className="wrapper container">
          <div className="search-wrapper">
            <input type="text" className="search-input" placeholder='Search' />
            <button className='search-btn'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="notes-wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <AddNote />
        </div>
      </div>
    </>
  )
}

export default App
