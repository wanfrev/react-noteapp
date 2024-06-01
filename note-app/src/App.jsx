import './assets/css/app.css'
import { Nav } from './components/Nav'
import { Card } from './components/Card'
import { AddNote } from './components/AddNote'
import { Details } from './components/Details'

function App() {
  const [onCreateNote, setOnCreateNote] = userState(false);
  const [onViewNote, setOnViewNote] = useState(false);
  const [notes, setNotes] = userState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const handleCreateNote = (note) =>{
    if(note){
      const tempNotes = [...notes, note];
      setNotes(tempNotes);
    }
  };

  const handleOnUpdate = (note) => {
    setCurrentNote(note);
    setOnCreateNote(true);
  }

  const handleUpdatedate = (note) =>{
    if(note){
      const tempNotes = [...notes.map(n =>n.id === note.id? note: n)];
      setNotes(tempNotes);
    }
  };

  const handleDeleteNote = (noteId) => {
    const tempNotes = [...notes.filter(n => n.id !== noteId)};
    setNotes(tempNotes);
  };

//console.log(notes); prueba

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
          {notes.map(note => (
              <Card 
                key = {note?.id} 
                note = {note}
                onUpdate = {handleOnUpdate}
                setView = {setOnViewNote}
              />
          ))}

          </div>
          {onCreateNote && (
            <AddNote 
              note = {currentNote}
              createNote = {handleCreateNote} 
              updateNote = {handleUpdateNote} 
              setOpen = {setOnCreateNote} 
              />
          )}
          {onViewNote && <Details setView = {setOnViewNote} />}
        </div>
      </div>
    </>
  )
}

export default App
