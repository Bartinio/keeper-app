import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function createEntry(props) {
    return <Note 
        key = {props.key}
        title = {props.title}
        content = {props.content}
    />
}

function App(){
    return (
        <>
        <Header />
        {notes.map(createEntry)}
        <Footer />
        </>
    )
}

export default App;