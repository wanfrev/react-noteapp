import './assets/css/app.css';
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { AddNote } from './components/AddNote';
import { Details } from './components/Details';
import { Login } from './components/Login';
import { useEffect, useState } from 'react';

export default function App() {
  // Definición de estados
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [onCreateNote, setOnCreateNote] = useState(false);
  const [onViewNote, setOnViewNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [search, setSearch] = useState("");
  let filteredNotes = [];

  // Cargar notas desde localStorage al iniciar
  useEffect(() => {
    const tempNotes = JSON.parse(localStorage.getItem("notes"));
    tempNotes && setNotes(tempNotes);
  }, []);

  // Guardar notas en localStorage
  const saveNotes = (items) => {
    localStorage.setItem("notes", JSON.stringify(items));
  };

  // Crear nueva nota
  const handleCreateNote = (note) => {
    if (note) {
      const tempNotes = [...notes, note];
      setNotes(tempNotes);
      saveNotes(tempNotes);
    }
  };

  // Preparar nota para actualización
  const handleOnUpdate = (note) => {
    setCurrentNote(note);
    setOnCreateNote(true);
  }

  // Actualizar nota existente
  const handleUpdateNote = (note) => {
    if (note) {
      const tempNotes = notes.map((n) => (n.id === note.id ? note : n));
      setNotes(tempNotes);
      setCurrentNote(null);
      saveNotes(tempNotes);
    }
  };

  // Eliminar nota
  const handleDeleteNote = (noteId) => {
    const tempNotes = notes.filter((n) => n.id !== noteId);
    setNotes(tempNotes);
    saveNotes(tempNotes);
  };

  // Ver nota en detalle
  const handleOnPreview = (note) => {
    setCurrentNote(note);
    setOnViewNote(true);
  }

  // Filtrar notas por búsqueda
  filteredNotes = search
    ? notes.filter(
        (n) =>
          n.title?.toLowerCase().includes(search.toLowerCase()) ||
          n.desc?.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  // Mostrar pantalla de login si no está autenticado
  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  // Renderizar la aplicación principal
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
