import React, { useEffect, useState } from "react";
// Import Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateNote = (props) => {
  const [notes, setNotes] = useState([]);
  const { NoteId } = useParams();
  const navigate = useNavigate();
  // console.log(NoteId);
  // console.log(notes);
  // add form logic here

  const updateNote = (note) => {
    // Make API call to create a note (POST request to localhost:9000/create_note)
    // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9000/create_note
    axios
      .put(`http://localhost:9000/update_note/${NoteId}`, note)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filteredNote = notes.filter((note) => note.id == NoteId);
  console.log(filteredNote);
  const validationSchema = Yup.object({
    title: Yup.string().required("Add title note"),
    description: Yup.string().required("Add description note"),
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = (values) => {
    updateNote({
      title: values.title,
      content: values.description,
    });
    console.log(values);
    values.title = "";
    values.description = "";
  };

  return (
    <div className="bg-blue-600 min-h-[100vh] flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">Update Note</h3>
          <div className="p-6 w-[60%] bg-white rounded" id="form-box">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              <Form className="p-2 flex flex-col gap-3 ">
                <Field
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="w-full p-3 border-2 rounded outline-none"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="border-l-4 border-[#ff2727] p-1 text-sm text-[#ff2727] shadow rounded"
                />
                <Field
                  as="textarea"
                  name="description"
                  placeholder="description"
                  className="w-full p-3 border-2 rounded outline-none"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="border-l-4 border-[#ff2727] p-1 text-sm text-[#ff2727] shadow rounded"
                />
                <button
                  type="submit"
                  className="p-4 bg-yellow-400 rounded-lg text-white hover:bg-yellow-500">
                  Add Note
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateNote;
