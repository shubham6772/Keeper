import React from "react";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Note from "./componants/Note";
import CreateArea from "./componants/CreateArea";
import { useState } from "react";

function App() {

  var[notes, setNote] = useState([]);

   function addNote(newnote){
     setNote(prevNote=>{
      return [...prevNote, newnote]
     });
   }
 
   function deleteNote(id){
       setNote((prevNote)=>{
        return prevNote.filter((noteItem, index)=>{
              return index !== id;
         })
       })
   }
    

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,index)=>{
          return <Note id = {index} title = {noteItem.title} content = {noteItem.content} onDelete={deleteNote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
