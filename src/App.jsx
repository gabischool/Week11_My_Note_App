import React, { useEffect, useState } from "react";
import axios from  'axios'
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import {Rout, Routes , Link } from 'react-dom'
// import Addnotte

 
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
       axios.get('http://localhost:9000/notes')
      .then((res) => {
        console.log([res.data])
      setNotes(res.data)
})
   .catch((error)=>{
    console.log(error)
   })
    // get all notes from localhost:9000/notes using axios
    // Dhamaan wixii notes ah kasoo jiido localhost:9000/notes adigoo axios isticmaalaayo
  
  }, []);

  const createNote = (noteData) => {
    // Make API call to create a note (POST request to localhost:9000/create_note)
    // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9000/create_note
    axios.post('http://localhost:9000/create_note', noteData)
    .then((resa)=>{
      // console.log(resa.data, ...notes)
      setNotes([resa.data, ...notes])
    })
  };

  const deleteNote = (id) => {
     
    // Make API call to delete a note (DELETE request to localhost:9000/delete_note/:id)
    // Halkaas ka tirtir note adigoo DELETE request isticmaalaayo localhost:9000/delete_note/:id
    axios.delete('http://localhost:9000/delete_note/${id}' , id)
    .then((id)=>{
      const updateNotes = notes.filter((note) => note.id !==id  );
      setNotes(updateNotes, ...notes);
    //   const updatedObjects = notes.filter((notes) => notes.id !== id);
    // setNotes(updatedObjects);
    })
  };

  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>

            
          <AddNote  createNote={createNote}/>
          <Notes notes={notes} deleteNote={deleteNote}   />
         
         {/* <div>
         <nav>
           
           <Link to="/">notes</Link>
           <Link to="/create_note"> Create notes</Link>
           <Link to="/delete_note/:id"> Create notes</Link>
 
       </nav>
        <div>
              
      <Routes>
          <Rout path="/" element ={ <Notes notes={notes} deleteNote={deleteNote}/>} />
          <Rout path="/create_note" element ={ <AddNote  AddNote={AddNote}/>} />
           <Rout path="/delete_note/:id" element ={ <deleteNote  />} />
    </Routes>
        </div>
        
    </div> */}
           </div>
      </div>
    </div>
  );
}

export default App;