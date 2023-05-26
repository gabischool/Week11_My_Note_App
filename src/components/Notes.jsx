
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const { notes, deleteNote, editNote } = props;
  const [editingNoteID, setEditingNoteID] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

  const startEditing = (noteID, title, content) => {
    setEditingNoteID(noteID);
    setUpdatedTitle(title);
    setUpdatedContent(content);
  };

  const cancelEditing = () => {
    setEditingNoteID(null);
    setUpdatedTitle("");
    setUpdatedContent("");
  };

  const saveNote = (noteID) => {
    // Call the editNote function with the updated note data
    editNote(noteID, {
      title: updatedTitle,
      content: updatedContent,
    });
    cancelEditing();
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6 p-6">
      {notes.map((note) => (
        <div className="p-4 rounded bg-yellow-500 relative" key={note.id} id="box-note">
          {editingNoteID === note.id ? (
            <div>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
                className="mt-2"
              ></textarea>
              <div className="flex justify-end mt-2">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
                  onClick={() => saveNote(note.id)}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={cancelEditing}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-[#fff] font-bold">{note.title}</h1>
              <p className="text-white text-left pb-3 overflow-hidden">{note.content}</p>
              <div className="w-full flex justify-between items-center text-[#fff] ">
                <FaEdit
                  onClick={() => startEditing(note.id, note.title, note.content)}
                  className="cursor-pointer"
                />
                <FaTrash onClick={() => deleteNote(note.id)} className="cursor-pointer" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Notes;


