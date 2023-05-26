import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const {notes ,deleteNotes} = props
  console.log(notes)
  return (
  <div className="flex flex-wrap items-center justify-center gap-4 mt-6 p-6">
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
      {notes.map(notes => (
        <div key={notes.id} className="flex  flex-wrap h-40 w-60 flex-col overflow-x-auto   p-3 rounded bg-yellow-500   "  id="box-note">
        <div className="h-50 w-50 ">
        <h1 className=" text-black font-bold   "> {notes.title} </h1>
         <p className=" text-black text-left pb-3      " > {notes.content}</p>
        </div>
         <div className="  flex justify-center items-end ">
          <FaEdit className="text-black cursor-pointer "/>
          <FaTrash onClick={() => deleteNotes(notes.id)   } className=" text-black cursor-pointer "/>
         </div>
       </div>   
      ))}
    </div>
  );
}

export default Notes;