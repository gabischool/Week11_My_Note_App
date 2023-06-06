// Import Formik and Yup
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const AddNote = (props) => {
  // add form logic here
  const initialValues = {
    title: "",
    content: ""
  }
  const validationSchema = Yup.object({
    title: Yup.string().required("it`s must to write your title of work"),
    content: Yup.string().required("it`s must to write your description of work")
  })
  const handleSubmit = (values) => {
    props.createNote({
      title: values.title,
      content: values.content
    })
  }

  return (
    <div className=" w-full p-4 bg-slate-100 ">
      { /* Add here your form and style it with Tailwind */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-3 p-2 ">
          <Field className="w-full p-3 shadow rounded outline-none " type="text" placeholder="Enter your work title ...." name="title" />
          <ErrorMessage className="text-red-500" component={"div"} name="title" />
          <Field className="w-full p-3 shadow rounded outline-none " type="text" placeholder="Enter your work content...." name="content" />
          <ErrorMessage className="text-red-500" component={"div"} name="content" />
          <button className="w-full p-3 rounded shadow text-center bg-blue-600 text-white text-lg" type="submit">Add Note </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
