import { Route, Routes } from "react-router-dom";
import EditNote from "./components/EditNote";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <ToastContainer />
      <div className="bg-blue-600 min-h-screen flex">
        <div className="w-full lg:w-[60%] bg-slate-100 lg:mx-auto shadow-inner">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl text-blue-600 mb-5 mt-5">My Notes</h3>
            <>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/EditNote/:id' element={<EditNote />} />
              </Routes>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;