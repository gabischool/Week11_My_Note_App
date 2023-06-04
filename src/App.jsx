import React, { useEffect, useState } from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay

import axios from "axios";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (function () {
      axios
        .get("http://localhost:9000/notes")
        .then(({ data }) => setNotes(data))
        .catch((err) => console.log(err));
    })();

    // get all notes from localhost:9000/notes using axios
    // Dhamaan wixii notes ah kasoo jiido localhost:9000/notes adigoo axios isticmaalaayo
  }, []);

  const createNote = (noteData) => {
    axios
      .post("http://localhost:9000/create_note", noteData)
      .then((res) => setNotes([...notes, res.data]))
      .catch((err) => console.log(err));
    // Make API call to create a note (POST request to localhost:9000/create_note)
    // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9000/create_note
  };

  const deleteNote = (id) => {
    // Make API call to delete a note (DELETE request to localhost:9000/delete_note/:id)
    // Halkaas ka tirtir note adigoo DELETE request isticmaalaayo localhost:9000/delete_note/:id
    axios
      .delete(`http://localhost:9000/delete_note/${id}`)
      .then((res) => setNotes(notes.filter((note) => note.id !== id)))
      .catch((error) => console.log(error.massege));
  };

  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          {/* Add here all the components you need */}
          <AddNote createNote={createNote} />
          <Notes notes={notes} deleteNote={deleteNote} />
          {/* Halkaas ku dar components-ka aad u baahan tahay */}
        </div>
      </div>
    </div>
  );
}

export default App;
