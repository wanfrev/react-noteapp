import { useEffect, useState } from 'react';
import './assets/css/app.css';

import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { AddNote } from './components/AddNote';
import { Details } from './components/Details';

export default function App() {
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [isViewingNote, setIsViewingNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Cargar notas desde localStorage al montar el componente
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes);
        if (Array.isArray(parsedNotes)) {
          setNotes(parsedNotes);
          console.log("Notas cargadas desde localStorage:", parsedNotes);
        }
      } catch (e) {
        console.error("Error al parsear notas desde localStorage:", e);
      }
    }
  }, []);

  // Guardar notas en localStorage cuando cambian las notas
  useEffect(() => {
    console.log("Guardando notas en localStorage:", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleCreateNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
    console.log("Nota creada:", note);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setCurrentNote(null);
    console.log("Nota actualizada:", updatedNote);
  };

  const handleDeleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    console.log("Nota eliminada:", noteId);
  };

  const handleViewNote = (note) => {
    setCurrentNote(note);
    setIsViewingNote(true);
    console.log("Viendo nota:", note);
  };

  const filteredNotes = searchTerm
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : notes;

  console.log("Notas actuales:", notes);
  console.log("Notas filtradas:", filteredNotes);

  return (
    <div className='app'>
      <Nav onCreate={() => setIsCreatingNote(true)} />
      <div className="wrapper container">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='search-btn'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="notes-wrapper">
          {filteredNotes.map((note) => (
            <Card
              key={note.id}
              note={note}
              onDelete={handleDeleteNote}
              onUpdate={() => {
                setCurrentNote(note);
                setIsCreatingNote(true);
              }}
              onPreview={handleViewNote}
            />
          ))}
        </div>
        {isCreatingNote && (
          <AddNote
            note={currentNote}
            onCreate={handleCreateNote}
            onUpdate={handleUpdateNote}
            onClose={() => setIsCreatingNote(false)}
          />
        )}
        {isViewingNote && (
          <Details
            note={currentNote}
            onClose={() => setIsViewingNote(false)}
          />
        )}
      </div>
    </div>
  );
}
