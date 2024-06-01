import { useState } from "react";
import PropTypes from 'prop-types';
import '../assets/css/addnote.css';
import { v4 as getID } from "uuid";

export const AddNote = ({ setOpen, note, createNote, updateNote }) => {
  const [title, setTitle] = useState(note ? note?.title : "");
  const [desc, setDesc] = useState(note ? note?.desc : "");

  const clearInputs = () => {
    setTitle("");
    setDesc("");
  }

  const handleClear = (event) => {
    event.preventDefault();
    clearInputs(); 
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (note) {
      // Actualizar nota
      updateNote({
        ...note,
        title,
        desc,
      });
    } else {
      // Crear Nota
      createNote({
        id: getID(),
        title,
        desc,
        createdAt: new Date().toDateString(),
      });
    }
    clearInputs();
    setOpen(false);
  }

  return (
    <div className='popupadd-note'>
      <div className="popupadd-wrapper">
        <div className="popupadd-header">
          <h2 className="heading">{note ? "Actualizar Nota" : "Agregar Nota"}</h2>
          <div className="close-btn" onClick={() => setOpen(false)}><i className="fa-solid fa-xmark"></i></div>
        </div>

        <form className="popupadd-form" onSubmit={handleSubmit}>
          <input 
            required 
            type="text" 
            placeholder='Title' 
            className="input-form"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea 
            className='textarea-form' 
            placeholder='Enter your note' 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="popupadd-actions">
            <button className="clear-btn" onClick={handleClear}>Clear</button>
            <button type="submit" className="save-btn">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  )
};

AddNote.propTypes = {
  setOpen: PropTypes.func.isRequired,
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  createNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};
