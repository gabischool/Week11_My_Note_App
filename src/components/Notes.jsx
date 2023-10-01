import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  // console.log("data from notes",props.notes)
  return (
    <div className="flex flex-wrap justify-center  text-center mt-5">
    {props.notes.map((note) => (
      <div
        className=" bg-amber-400 m-5 shadow-2xl p-2 rounded w-[18vw] h-[45vh]"
        key={note.id}
      >
        <div className="p-5">
          <h3 className="font-bold text-2xl -mt4 mb-4 break-words">{note.title}</h3>
          <p className=" break-words">{note.content}</p>
        </div>
        <div className="relative bottom-0 left-0 right-0 flex justify-center p-4">
          <button className="mr-2">
            <FaEdit size={20} onClick={() => props.updateNote(note.id, note)} />
          </button>
          <button>
            <FaTrash size={20} onClick={() => props.deleteNote(note.id)} />
          </button>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Notes