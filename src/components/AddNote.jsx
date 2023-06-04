import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";

import { object, string } from "yup";

const AddNote = (props) => {
  const { createNote } = props;
  // add form logic here
  const initialValue = {
    title: "",
    content: "",
  };
  const validatinSchema = object({
    title: string().required("required"),
    content: string().required("required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    createNote(values);
    values.title = "";
    values.content = "";
  };

  return (
    <div className="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      {/* Add here your form and style it with Tailwind */}

      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validatinSchema}
      >
        <Form className="w-full max-w-lg">
          <div className="mb-5">
            <Field
              name="title"
              type="text"
              className="w-full border border-gray-300 rounded"
            />
            <ErrorMessage name="title" />
          </div>
          <div className="mb-5">
            <Field
              as="textarea"
              name="content"
              className="w-full border border-gray-300 rounded"
            />
            <ErrorMessage name="content" />
          </div>
          <button
            type="submit"
            className="bg-blue-700 w-full border border-gray-300 rounded text-white font-bold"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
