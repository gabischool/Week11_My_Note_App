import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes({notes,deleteNote}) {
  const deletItem=()=>{
deleteNote(notes.id)

  }
  
  return (
    <div>
      {/* Style your note cards with Tailwind here and get the data from app.js */ }
  <div className="flex gap-5 h-48 w-1/1 mt-20">
  {notes.map((note)=>{
    return(
      <>
      <div className="flex flex-col items-center justify-center gap-y-20 bg-yellow-400 p-10 w-full">
    <div className="">
      <h2 className="text-2xl font-bold">{note.title}</h2>
      <p>{note.content}</p>
      
    </div >
    <div className="">
    <button className="mr-8"><FaEdit/></button>
    <button onClick={deletItem}><FaTrash/></button>
    </div>
    </div>
    </>
    )
   })
   }
  </div>
     
    </div>
  );
}

export default Notes;