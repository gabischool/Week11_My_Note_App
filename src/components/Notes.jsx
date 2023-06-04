import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const { notes, deleteNote } = props;

  return (
    <div className="w-5/6 flex flex-wrap justify-center justify-items text-center">
      {notes.map((note, index) => (
        <div
          key={index}
          className=" bg-orange-400 rounded shadow-2xl px-10 m-5 text-white"
        >
          <div className="p-5">
            <h1 className="font-bold text-2xl mb-4 text-black capitalize">
              {note.title}
            </h1>
            <p className="font-bold text-base text-black mb-4 text-2xl">
              {note.content}
            </p>
            <div className="flex justify-center space mt-2 p-2 text-black">
              <button onClick={() => deleteNote(note.id)}>
                <FaTrash />
              </button>
              <button>
                <FaEdit className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Style your note cards with Tailwind here and get the data from app.js */}
    </div>
  );
}

export default Notes;
