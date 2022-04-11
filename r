import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

// function createNote(note) {
//   return <Note key={note.key} title={note.title} content={note.content} />;
// }

// KEY IS REQUIRED FOR INTERNAL DISTINGUISIHING IN REACT

function App() {
  return (
    <div>
      <Header />
      {notes.map(note => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
