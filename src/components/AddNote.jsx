import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import React from 'react';

// Import Formik and Yup

const AddNote = (props) => {
 
  // add form logic here
  const initialValues = {
    title: "",
    content : "",
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('content is required'),
  });


  const handleSubmit = (values, { resetForm }) => {
    props.createNote({
      title: values.title,
      content: values.content,
    });

    // Reset the form after submission
    resetForm();
  };
  

  return (
    <div className=" flex flex-row items-center justify-center bg-blue-600 w-[220vh]">
      <div className="mx-auto rounded-lg bg-white p-6 shadow md:w-3/4 lg:w-1/2 ">
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
          <Form>
          <div className="mb-5">
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  className="w-full rounded border border-gray-300 p-3 shadow outline-none"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500"
                />
              </div>
        
            <div className="mb-5">
                <Field
                  as="textarea"
                  id="content"
                  name="content"
                  placeholder="content"
                  className="w-full rounded border border-gray-300 p-3 shadow outline-none"
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="mt-4 rounded w-full bg-amber-400 px-12 py-3 font-bold text-white hover:bg-orange-500">
                Add Product
              </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddNote;