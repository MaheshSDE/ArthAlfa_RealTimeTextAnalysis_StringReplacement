import React, { useState } from 'react';
import './index.css';

const  RealTimeAnalysis=()=> {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');
  const [message,setMessage]=useState(false)

  // Update text as user types
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const onChangeSearchString =(event)=>{
    setSearchString(event.target.value);
  }

  const onChangeReplaceString=(event)=>{
    setReplaceString(event.target.value);
  }

  // Calculate unique word count
  const getUniqueWords = () => {
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g);
      //console.log(words);
    const uniqueWords = new Set(words);
    //console.log(uniqueWords);
    return uniqueWords.size;
  };

  // Count characters excluding spaces and punctuation
  const getCharacterCount = () => {
    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    console.log(characters);
    return characters.length;
  };

  // Replace string functionality
  const handleReplaceAll = () => {
    if(text){
        const replacedText = text.split(searchString).join(replaceString);
        setText(replacedText);
        setMessage(false)
    }
    else{
       setMessage(true) 
    }
    
  };
  

  return (
    <div className="container">
      <h1>Real-Time Text Analysis</h1>
      <textarea
        rows="10"
         value={text} 
        onChange={handleTextChange}
        placeholder="Type here..."
      />

      <div className="stats">
        <p>Unique Words: <span>{getUniqueWords()}</span></p>
        <p>Character Count (Excluding spaces and punctuation): <span>{getCharacterCount()}</span></p>
      </div>

      <div className="replace-section">
        <input
          type="text"
          value={searchString}
          onChange={onChangeSearchString}
          placeholder="Search for"
        />
        <input
          type="text"
          value={replaceString}
          onChange={onChangeReplaceString}
          placeholder="Replace with"
        />
        <button onClick={handleReplaceAll}>Replace All</button>
      </div>
        {message ? (<h3>Please Give Valid Input Text!!!</h3>) : ""}
      
    </div>
  );
}

export default RealTimeAnalysis;
