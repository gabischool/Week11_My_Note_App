import React, { useEffect, useState } from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay

 import Notes from './components/Notes'
 import AddNote from './components/AddNote'

import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [updatedNote, setUpdatedNote] = useState("");

  useEffect(() => {
    // get all notes from localhost:9000/notes using axios
    // Dhamaan wixii notes ah kasoo jiido localhost:9000/notes adigoo axios isticmaalaayo
      fetchNotes()
  }, []);

  const fetchNotes = () => {
    axios.get(`http://localhost:9000/notes`)
      .then(res => {
        setNotes(res.data)
      })
      .catch(err => {
        console.error(err)
      });
    }
  const createNote = (noteData) => {
    // Make API call to create a note (POST request to localhost:9000/create_note)
    // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9000/create_note

    axios.post('http://localhost:9000/create_note', noteData)
    .then(res => {
      console.log('created', res.data);
      fetchNotes(); 
    })
    .catch(error => {
      console.log(error);
    });
  };

  const deleteNote = (id) => {
    // Make API call to delete a note (DELETE request to localhost:9000/delete_note/:id)
    // Halkaas ka tirtir note adigoo DELETE request isticmaalaayo localhost:9000/delete_note/:id

    axios.delete(`http://localhost:9000/delete_note/${id}`)
    .then(res => {
      console.log('deleted')
      fetchNotes()
    })
    .catch(error => {
      console.log(error)
    })
  };

  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka

  const updateNote = (id, updatedData) => {
    axios
      .put(`http://localhost:9000/update_note/${id}`, updatedData)
      .then((res) => {
        console.log("updated", res.data);
        fetchNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id, currentNote) => {
    setEditingNoteId(id);
    setUpdatedNote(currentNote);
  };

  const handleUpdate = (id) => {
    if (!updatedNote) return;
    updateNote(id, { content: updatedNote });
    setEditingNoteId(null);
    setUpdatedNote("");
  };
  
  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          { /* Add here all the components you need */ }
          { /* Halkaas ku dar components-ka aad u baahan tahay */ }

          <AddNote createNote={createNote} />
          <Notes notes={notes} deleteNote={deleteNote}  updateNote={updateNote}/>
        </div>
      </div>
    </div>
  );
}

export default App;