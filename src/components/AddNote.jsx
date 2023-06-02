import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddContact = (props) => {
  const initialValues = {
    name: '',
    content: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    content: Yup.string().required('Phone is required'),
  });

  const handleSubmit = (values) => {
 
      props.createNote({
        name: values.name,
        content: values.content,
       
      });

      values.name = "",
      values.content = ""
    
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-5">
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>

          <div className="mb-5">
          <Field  className="border border-gray-300 shadow p-3 w-full rounded mb-"
            as="textarea"
            name="content"
            placeholder="Content"
           />
            <ErrorMessage name="phone" component="div" className="text-red-500" />
          </div>
          <button
            type="submit"
            className="block w-full bg-green-400 text-black font-bold p-4 rounded-lg hover:bg-green-500"
          >
            Add Note
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddContact;
















// import React from 'react';
// import { Formik, Form, Field, ErrorMessage} from 'formik';
// // Import Formik and Yup
// import * as Yup from 'yup';

// const AddNote = (props) => {
 
//   // add form logic here
//   const initialValues = {
//    name: "",
//    content: ""
//   }

//   const ValidationSchema = Yup.object({
//     name: Yup.string().required("Add Title"),
//     content: Yup.string().required("Add description")
//  })

//   const handleSubmit = (values) => {
//    props.AddNote({
//     name: values.name,
//     content: values.content
//    });
//   }

//   return (
//     <div className='w-5/12 h-full p-10 bg-white rounded shadow-white-400/50'>
//       { /* Add here your form and style it with Tailwind */ }
//       <Formik 
//        initialValues={initialValues} 
//        ValidationSchema={ValidationSchema}   
//         onSubmit={handleSubmit}>
        
//         <Form className='flex flex-col'>
         
//           <Field type="text" className="w-full my-2 p-2 border border-grey-500 rounded shadow shadow-grey-400/50"
//           name="name" 
//           placeholder="title"
//           />
//           <ErrorMessage component="div" className="text-red-600 border border-red-500  rounded text-center" name="name"/>
           

//          <Field type="text" className="w-full my-2 p-2 border border-grey-500 rounded shadow shadow-grey-400/50"
//           name="content" 
//           placeholder="Body"
//           />

//         <ErrorMessage component="div" className="text-red-600 border border-red-500  rounded text-center" name="content"/>
          
//           <button type='submit'>Add Note</button>
//         </Form>

//       </Formik>
//     </div>
//   );
// };

// export default AddNote;
