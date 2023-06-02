import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import App from "../App";
import {Card , CardGroup }from 'react-bootstrap'
import AddNote from "./AddNote";

function Notes(props) {
  const {notes }=props
  const {deleteNote}=props
  // const {AddNote}=props
  return (
    <div className=" p-5 mr-5 bottom-9"  >
      {props.notes.map((notes)=>(
        <div className="bg-white font-serif justify-content-md-around " key={notes.id} >
          <FaTrash onClick={()=>props.deleteNote(notes.id)} className="mr-0 border-dark"/>  
           <div className="mr-5  m-10 m-lg-auto object-scale-down"  >
            <p className="flex flex-row-1  space-y-5"  >{notes.title}</p>
            <p>{notes.content}</p>
           </div>
        </div>
      ))
  }
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
      
    </div>
  );
}

export default Notes;