import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
function Notes({ notes, deleteNote}) {
  return (
    <div className="w-full p-6">
      { /* Style your note cards with Tailwind here and get the data from app.js */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
          notes.map(val => {
            return (
              <div key={val.id} className="p-4 rounded shadow-lg space-y-3 hover:shadow-inner border hover:border-blue-600">
                <p className="text-blue-600 text-lg tracking-widest">{val.title}</p>
                <p className="text-md italic">{val.content}</p>
                <button onClick={() => deleteNote(val.id)} ><FaTrash className="text-red-500" /></button>
                <button className="ml-5">
                  <Link to={`/EditNote/${val.id}`}><FaEdit className="text-green-500" /></Link>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Notes;