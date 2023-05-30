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
    <div className="object-scale-down ">
      {props.notes.map((notes)=>(
        <div className="bg-white font-serif justify-content-md-around " key={notes.id}>
           <div className="mr-5  m-10 m-lg-auto object-scale-down">
            <Card className="flex flex-row-1  space-y-5" >{notes.title}</Card>
            <Card.Text>{notes.content}</Card.Text>
           </div>
        </div>
      ))
  }
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
      
    </div>
  );
}

export default Notes;