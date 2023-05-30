import React from 'react';
import {Formik, Form  , Field, ErrorMessage } from 'Formik'
import App from '../App';
import * as Yup from "yup";
// Import Formik and Yup

const AddNote = (props) => {
  
  const intialValues={
    title:"",
     content:""
     
  };

  const validationScheme=Yup.object({
    title : Yup.string().required("required"),
    content : Yup.string().required("required")
})

  const handleSumbit =(values)=>{
    props.createNote({
      title: values.title,
      content: values.content
    })
    // console.log(values)
  }
  // add form logic here

  const {createNote}=props

  return (
    <div>
      { /* Add here your form and style it with Tailwind */ }
      <Formik 
           initialValues={intialValues}
           onSubmit={handleSumbit} 
           validationSchema={validationScheme}>
         <Form className='flex flex-col  space-y-5'  >
           <Field 
              type="text"  name="title" placeholder='Enter the Note Name' 
                />
              <ErrorMessage name='title' />
           <Field type="text" 
                placeholder='Enter the Discription' 
                 name="content"
                  />
                  <ErrorMessage name='content' />
         <button type='submit'  className=" bg-amber-500" >CREATE NOTE</button>
         
         </Form>
      </Formik>
      
      
    </div>
  );
};

export default AddNote;
