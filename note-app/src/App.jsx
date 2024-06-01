import './assets/css/app.css'
import { Nav } from './components/Nav'
import { Card } from './components/Card'
import { AddNote } from './components/AddNote'
import { Details } from './components/Details'
import { useEffect, useState } from 'react'

export default function App() {
  const [onCreateNote, setOnCreateNote] = useState(false);
  const [onViewNote, setOnViewNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [search, setSearch] = useState("");
  let filteredNotes = [];

  useEffect(() => {
    const tempNotes = JSON.parse(localStorage.getItem("notes"));
    tempNotes && setNotes(tempNotes);
  }, []);
  
  const saveNotes = (items) => {
    localStorage.setItem("notes", JSON.stringify(items));
  };

  const handleCreateNote = (note) => {
    if (note) {
      const tempNotes = [...notes, note];
      setNotes(tempNotes);
      saveNotes(tempNotes);
    }
  };

  const handleOnUpdate = (note) => {
    setCurrentNote(note);
    setOnCreateNote(true);
  }

  const handleUpdateNote = (note) => {
    if (note) {
      const tempNotes = notes.map((n) => (n.id === note.id ? note : n));
      setNotes(tempNotes);
      setCurrentNote(null);
      saveNotes(tempNotes);
    }
  };

  const handleDeleteNote = (noteId) => {
    const tempNotes = notes.filter((n) => n.id !== noteId);
    setNotes(tempNotes);
    saveNotes(tempNotes);
  };

  const handleOnPreview = (note) => {
    setCurrentNote(note);
    setOnViewNote(true);
  }

  filteredNotes = search
    ? notes.filter(
        (n) =>
          n.title?.toLowerCase().includes(search.toLowerCase()) ||
          n.desc?.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  return (
    <div className='app'>
      <Nav setOpen={setOnCreateNote} />
      <div className="wrapper container">
        <div className="search-wrapper">
          <input 
            onChange={(e) => setSearch(e.target.value)} 
            type="text" 
            className="search-input" 
            placeholder='Search' 
            value={search}
          />
          <button className='search-btn'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="notes-wrapper">
          {filteredNotes.map((note) => (
            <Card 
              key={note?.id} 
              note={note}
              onDelete={handleDeleteNote}
              onUpdate={handleOnUpdate}
              onPreview={handleOnPreview}
            />
          ))}
        </div>
        {onCreateNote && (
          <AddNote 
            note={currentNote}
            createNote={handleCreateNote} 
            updateNote={handleUpdateNote} 
            setOpen={setOnCreateNote} 
          />
        )}
        {onViewNote && (
          <Details 
            note={currentNote}
            setView={setOnViewNote} 
          />
        )}
      </div>
    </div>
  );
}