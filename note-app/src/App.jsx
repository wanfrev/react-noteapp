import './assets/css/app.css'
import { Nav } from './components/Nav'
import { Card } from './components/Card'
import { Details } from './components/details'
import { AddNote } from './components/AddNote'

function App() {

  const [onCreateNote, setOnCreateNote] = useState(false);
  const [onViewNote, setOnViewNote] = useState(false);
  
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
          {onCreateNote && <AddNote setOpen = {setOnCreateNote} />}
          {onViewNote && <Details setView = {setOnViewNote} />}
        </div>
      </div>
    </>
  )
}

export default App
