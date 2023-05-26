import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const { notes, deleteNote, updateNote } = props;
  const [editNoteId, setEditNoteId] = useState(null);
  const [updatedNote, setUpdatedNote] = useState("");

  const handleEdit = (id, currentNote) => {
    setEditNoteId(id);
    setUpdatedNote(currentNote);
  };

  const handleUpdate = (id) => {
    if (!updatedNote) return;
    updateNote(id, { content: updatedNote });
    setEditNoteId(null);
    setUpdatedNote("");
  };

  return (
    <div className="flex items-center justify-between bg-yellow-200 p-4">
      {/* Render note cards */}
      {notes.map((note) => (
        <div key={note.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          {editNoteId === note.id ? (
            <div>
              <textarea
                value={updatedNote}
                onChange={(e) => setUpdatedNote(e.target.value)}
                className="mb-2 w-full border border-gray-300 rounded p-2"
              />
              <button
                onClick={() => handleUpdate(note.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
              </button>
            </div>
          ) : (
            <div>
              <p>{note.content}</p>
              <div>
                <button
                  onClick={() => handleEdit(note.id, note.content)}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Notes;
