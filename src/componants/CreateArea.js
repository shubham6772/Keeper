import React, {useState} from "react";



function CreateArea(props) {

  var[note, setnote] = useState({
   title : "",
   content : ""
  });

  function handleChange(event){
     const{name , value} = event.target;

     setnote(prevNote=>{
      return{
        ...prevNote,
      [name] : value

      };
     });
  } 
 
   function handleClick(event){
    props.onAdd(note);
    setnote({
      title : "",
      content : ""
     })
    event.preventDefault();
   }


  return (
    <div>
      <form className="create-note">
        <input
         onChange={handleChange} 
         value={note.title} 
         name="title" 
         placeholder="Title" />

        <textarea 
        onChange={handleChange} 
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" />

        <button onClick={handleClick}>Add</button>

      </form>
    </div>
  );
}

export default CreateArea;
