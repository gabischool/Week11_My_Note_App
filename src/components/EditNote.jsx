import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from 'react-toastify';
const EditNote = () => {
    const [note, setNote] = useState()
    const initialValues = {
        title: "",
        content: ""
    }
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:9000/notes/`, id).then((res) => {
            setNote(res)
        }).catch((err) => { console.log(err) });
    }, [id]);
    const validationSchema = Yup.object({
        title: Yup.string().required("it`s must to write your title of work"),
        content: Yup.string().required("it`s must to write your description of work")
    })
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        axios.put(`http://localhost:9000/update_note/${id}`, values).then(res => {
            console.log(res);
            navigate("/");
            toast.success("successfully updated note ....")
        }).catch(er => {
            console.log(er);
            toast.error("error updating note ....")
        })
    }
    console.log(note)
    return (
        <>
            <div className="w-full lg:w-[50%] lg:mx-auto p-5 rounded-md ">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    <Form className="flex flex-col gap-5 p-2 w-full ">
                        <Field className="w-full p-3 shadow rounded outline-none " type="text" placeholder="Enter your work title ...." name="title" />
                        <ErrorMessage className="text-red-500" component={"div"} name="title" />
                        <Field className="w-full p-3 shadow rounded outline-none " type="text" placeholder="Enter your work content...." name="content" />
                        <ErrorMessage className="text-red-500" component={"div"} name="content" />
                        <button className="w-full p-3 rounded shadow text-center bg-blue-600 text-white text-lg" type="submit">Add Note </button>
                    </Form>
                </Formik>
            </div>

        </>
    )
}

export default EditNote