import React, { useEffect, useState } from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay
import AddNote from "./components/AddNote";
import Notes from './components/Notes';
import axios from "axios";

function App() {
  // const [notes, setNotes] = useState([]);

  useEffect(() => {
    // get all notes from http://localhost:9000/notes using axios
    // Dhamaan wixii notes ah kasoo jiido http://localhost:9000/notes adigoo axios isticmaalaayo
    axios.get('http://localhost:9006/notes')
    .then(res => {
      setNotes(res.data);
      // console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const createNote = (noteData) => {
    // Make API call to create a note (POST request to http://localhost:9000/create_note)
    // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9001/create_note
    axios.post('http://localhost:9000/create_note', noteData)
    .then(res => {
      setNotes([res.data, ...notes]);
    })
    .catch(err => {
      console.log(err);
    })
  };

  const deleteNote = (id) => {
    // Make API call to delete a note (DELETE request to http://localhost:9000/delete_note/:id)
    // Halkaas ka tirtir note adigoo DELETE request isticmaalaayo http://localhost:9000/delete_note/:id
    axios.delete(`http://localhost:9006/delete_note/${noteID}`)
     .then((res) => {
       console.log(res.data)
     })
     .catch((err) => {
      console.log(err)
     });
     const newData = notes.filter((note) => note.id !== noteID);
     setNotes(newData);
     
  };


  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          { /* Add here all the components you need */ }
          { /* Halkaas ku dar components-ka aad u baahan tahay */ }
        </div>
      </div>
    </div>
  );
}

export default App;
