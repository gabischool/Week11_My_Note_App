import { useEffect, useState } from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay
import AddNote from './AddNote'
import Note from './Notes'
import axios from "axios";
import { toast } from "react-toastify";
function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // get all notes from localhost:9000/notes using axios
        // Dhamaan wixii notes ah kasoo jiido localhost:9000/notes adigoo axios isticmaalaayo
        axios.get('http://localhost:9000/notes')
            .then(res => {
                setNotes(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, []);

    const createNote = (noteData) => {
        // Make API call to create a note (POST request to localhost:9000/create_note)
        // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9000/create_note
        axios.post('http://localhost:9000/create_note', noteData)
            .then(res => {
                console.log('sharafdin', res.data)
                toast.success('successfully created Note....')
                document.location.reload(res.data);
            }).catch(err => {
                console.log(err)
                toast.error('error occur deleting note......')
            })

    };

    const deleteNote = (id) => {
        const confirm = window.confirm('are sure you want to delete this content')
        if (confirm) {
            axios.delete('http://localhost:9000/delete_note/' + id)
                .then(res => {
                    console.log(res.data)
                    toast.success('successfully deleted note ....')
                    document.location.reload(res.data);
                }).catch(err => {
                    console.log(err)
                    toast.error('error occur  deleting note .....')
                })
        }
    }

    // STRETCH GOAL: Implement edit functionality
    // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka
    return (
        <>
            <AddNote createNote={createNote} />
            <Note notes={notes} deleteNote={deleteNote} />
        </>
    );
}

export default Home;