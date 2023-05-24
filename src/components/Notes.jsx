import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const {notes, deleteNote} = props;

  return (
    <div className="flex flex-wrap gap-4 mt-6 p-6">
       {notes.map(note => (
         <div className="w-[250px] p-4 rounded bg-yellow-500 h-[220px] relative" key={note.id}>
         <h1 className="text-[#fff] font-bold">{note.title}</h1>
         <p className="text-white text-left pb-3 overflow-hidden">{note.content}</p>
         <div className="flex justify-between items-center text-[#fff] absolute bottom-3 ">
          <FaEdit className="cursor-pointer"/>
          <FaTrash onClick={() => deleteNote(note.id)} className="cursor-pointer relative left-[185px]"/>
         </div>
       </div>   
       ))}      
    </div>
  );
}

export default Notes;