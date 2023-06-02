import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-4 p-6">
       {props.notes.map((note) => (
        <div
          className=" bg-white m-5 shadow-2xl p-10"
          key={note.id}
        >
          <div className="p-5">
            <h2 className="font-bold text-2xl mb-4 ">Name: {note.name}</h2>
            <p>description {note.content}</p>
          </div>
          <div className="relative bottom-0 left-0 right-0 flex justify-center p-4">
            <button className="mr-2">
              <FaEdit size={20}  />
            </button>
            <button>
              <FaTrash size={20} onClick={() => props.deleteNote(note.id)} />
            </button>
          </div>
        </div>
      ))}
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
    </div>
  );
}

export default Notes;