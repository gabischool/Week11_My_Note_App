import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddNote = ({ createNote }) => {
  const validationSchema = Yup.object().shape({
    note: Yup.string().required('Note is required'),
  });

  const initialValues = {
    note: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const noteData = { title: values.note, content: values.note };
    createNote(noteData);
    resetForm();
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded p-4 shadow">
      <h1 className="text-2xl font-bold mb-4">Add Note</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="note" className="text-lg font-medium">
              Note:
            </label>
            <Field
              type="text"
              id="note"
              name="note"
              className="border border-gray-300 p-2 rounded w-full"
            />
            <ErrorMessage
              name="note"
              component="div"
              className="text-red-600 mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
