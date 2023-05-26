import React from 'react';

// Import Formik and Yup
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from "axios"

const AddNote = (props) => {
 
  // add form logic here
  const initialValues = {
    title : "",
    content:""
  }

  const validationSchema = yup.object({
    title: yup.string().required("not allowed empty field"),
    content: yup.string().required("not allowed empty field"),
  })

  const handleSubmit = (values) => {
// console.log(values.title);

props.createNote({title:values.title, 
  content:values.content})

// console.log(props.createNote());
// console.log({title:values.title, 
//   content:values.content});

  }

  return (
    <div className='w-1/2 flex flex-col bg-white rounded-md shadow-xl'>
      { /* Add here your form and style it with Tailwind */ }
      <div className='m-10 '>
        
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
          <Form className='flex flex-col'>
            <Field 
            className="w-full  rounded border border-gray-300 p-2 shadow-md outline-none"
            type="text" 
            id="title"
            name="title"
            placeholder="Enter Title"/>
            <ErrorMessage component="div" className='text-red-700 capitalize font-semibold' name='title'/>
            <Field 
            className="w-full mt-3 rounded border border-gray-300 p-3 shadow-md outline-none"
            type="text" 
            id="content"
            name="content"
            placeholder="content"/>
            <ErrorMessage component="div" className='text-red-700 capitalize font-semibold' name='body'/>
          <button type='submit' className='mt-10 bg-yellow-400 text-black text-2xl font-semibold p-2 rounded-md'>Add Note</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddNote;
