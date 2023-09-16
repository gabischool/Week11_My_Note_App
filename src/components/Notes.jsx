import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {


  const {notes, deleteed} = props;

  console.log(notes)
  

  
  return (
 
   
 
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 p-6">
       {notes.map(note => (
         <div className="p-4 rounded bg-yellow-500 relative" key={note.id} id="box-note">
         <h1 className="text-[#fff] font-bold">{note.title}</h1>
         <p className="text-white text-left pb-3 overflow-hidden">{note.content}</p>
         <div className="w-full flex justify-between items-center text-[#fff] ">
          <FaEdit className="cursor-pointer"/>
          <FaTrash onClick={() => deleteed(note.id)} className="cursor-pointer "/>
         </div>
       </div>   
       ))}      
    </div>


     
    ) 
   


}

export default Notes;