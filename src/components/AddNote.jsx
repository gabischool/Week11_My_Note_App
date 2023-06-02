import React from 'react';
// Import Formik and Yup
import { Formik, Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';

const AddNote = (props) => {

  // add form logic here

  const {addNote} = props;

  const validationSchema = Yup.object({
    title: Yup.string().required('Add title note'),
    description: Yup.string().required('Add description note')
  });

  const initialValues = {
    title: '',
    description: ''
  };

  const handleSubmit = (values) => {
    addNote({
      title: values.title,
      content: values.description
    });

    values.title = '';
    values.description = "";

  };

  return (
    <div className="p-6 w-[60%] bg-white rounded" id="form-box">
     <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
      <Form className="p-2 flex flex-col gap-3 ">
        <Field 
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-3 border-2 rounded outline-none"
          />
        <ErrorMessage name="title" component="div" className="border-l-4 border-[#ff2727] p-1 text-sm text-[#ff2727] shadow rounded"/>
         <Field 
          as="textarea"
          name="description"
          placeholder="description"
          className="w-full p-3 border-2 rounded outline-none"
         />
        <ErrorMessage name="description" component="div" className="border-l-4 border-[#ff2727] p-1 text-sm text-[#ff2727] shadow rounded"/>
         <button type="submit" className="p-4 bg-yellow-400 rounded-lg text-white hover:bg-yellow-500">Add Note</button>
      </Form>
     </Formik>
    </div>
  );
};

export default AddNote;