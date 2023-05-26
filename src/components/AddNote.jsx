import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

// Import Formik and Yup


const AddNote = (props) => {
 
  // add form logic here

 const {addNotes} = props;
 
const initialValues = {
  title: "",
  content:""
}
const validationScheme = Yup.object().shape({
  title: Yup.string().required(),
  content: Yup.string().required()
});

const handleSubmit = (values)=>{
   addNotes({
     title: values.title ,
     content: values.content
  })
//  console.log(values)

}

 

  return (
    <div className="flex flex-col flex-wrap justify-start items-center  bg-gray-100 p-8 h-68 w-2/4 space-y-5 rounded-lg" >
      { /* Add here your form and style it with Tailwind */ }
 

  
     <Formik
     initialValues={initialValues} 
     onSubmit={handleSubmit} 
     validationSchema={validationScheme}

     >
      <Form className="flex flex-col space-y-5 w-full">
       <Field 
        type="text" name="title" placeholder="title" 
        className="w-full rounded border border-b-gray-300 shadow p-3 "
        />
       <ErrorMessage name="title"  component="span" className='text-red-500' />


       <Field
        type="text" name="content"  placeholder="body" 
        className="w-full rounded border border-b-gray-300 shadow p-3"
        />
       <ErrorMessage  name="content" component="span"   className='text-red-500' />

       <Field 
        name="Add Note"    type="submit" 
        className="rounded mt-4 text-black font-bold   bg-yellow-400  px-12 py-3 "
        />
 
      </Form>

     </Formik>
 
    </div>
  );
};

export default AddNote;
