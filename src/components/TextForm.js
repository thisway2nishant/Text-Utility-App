import React, {useState} from "react";

export default function TextForm(props) {
    const [prevText, setPrevText] = useState('');
    const [nextText, setNextText] = useState('');

    // const textRecord = (text, type)=>{
    //   if(type === 'prev'){
    //     setPrevText(text);
    //     console.log(prevText);
        
    //   }
    //   else{
    //     setNextText(text);
    //     console.log(nextText);
    //   }
    // }
    const handleUpButton = ()=>{
        //console.log("Uppercase Button Clicked")
        setPrevText(text);
        let newTxt = text.toUpperCase();
        setText(newTxt);
        setNextText(text);
    }

    const handleLoButton = ()=>{
        //console.log("Uppercase Button Clicked")
        setPrevText(text);
        let newTxt = text.toLowerCase();
        setText(newTxt);
        setNextText(text);
    }

    const handleClearButton = ()=>{
      setPrevText(text);
      setText('');
      setNextText(text);
      props.showAlert("Text Cleared!", "success")
    }

    const handleTiCButton = ()=>{
     // let rawTxt = text.split(' ');
     setPrevText(text);
      let rawTxt =text.toLowerCase().split(' ');
      let newTxt = rawTxt.map((word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
      })
      newTxt = newTxt.join(' ');
      setText(newTxt);
      setNextText(text);
    }

    const handleSeCButton = ()=>{
      setPrevText(text);
      let rawTxt = text.toLowerCase().split('.');
      //console.log(rawTxt);
      let newTxt = rawTxt.map((word)=>{
         if(word.charAt(0) === ' '){
           return word.charAt(1).toUpperCase()+word.slice(2);
         }
         else{
           return word.charAt(0).toUpperCase()+word.slice(1);
         }
      })
      //console.log(newTxt);
      newTxt = newTxt.join('. ');
      setText(newTxt);
      setNextText(text);
    }

    const handleCopyButton = ()=>{
       let text = document.getElementById('textBox')
       text.select();
      if(text.value===null){
        props.showAlert('TextArea is empty', 'warning');
      }
      else{
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied!', 'success');
      }
    }

    const handleRemCharButton = ()=>{
      setPrevText(text);
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      setNextText(text);
    }

    const handleSaveButton = ()=>{
      //var text = document.getElementById("my-textarea").value;
      let newText = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
      let blob = new Blob([newText], { type: "text/plain"});
      let anchor = document.createElement("a");
      anchor.download = "myText.txt";
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target ="_blank";
      anchor.style.display = "none"; // just to be safe!
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }

    const handleUndoButton = ()=>{
      
      let newTxt = prevText;
      setNextText(text);
      setText(newTxt);
    }

    const handleRedoButton = ()=>{
      let newTxt = nextText;
      setPrevText(text);
      setText(newTxt);
    }

    const handleChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2 className="my-3" style={{width:"fit-content", margin: 'auto', fontFamily:"'Roboto Condensed', sans-serif"}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          value={text} onChange={handleChange}
          rows="8"
          placeholder="Enter your text here."
          style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#212529', border:props.mode==='light'?'2px solid black':'2px solid white'}}
        ></textarea>
      </div>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleUpButton}>Upper Case</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleLoButton}>Lower Case</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleTiCButton}>Title Case</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleSeCButton}>Sentence Case</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleRemCharButton}>Remove Extra Spaces</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleClearButton}>Clear Text</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleCopyButton}>Copy</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleSaveButton}>Save</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleUndoButton}>Undo</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleRedoButton}>Redo</button>
    </div>
    <hr></hr>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <table className={`table table-striped table-bordered ${props.mode==='light'?'':'table-dark'}`} style={{border: props.mode==='light'?'2px solid black':'2px solid white'}}>
        <thead>
          <tr>
            <th><strong>Summary Of Your Text</strong></th>
            <th></th>
          </tr>
        </thead>
       <tbody>
         <tr>
           <td>Number of Words</td>
           <td>{text.split(" ").filter((element)=>{return element.length !==0}).length}</td>
         </tr>
         <tr>
           <td>Number of Characters</td>
           <td>{text.length}</td>
         </tr>
         <tr>
           <td>Number of Sentences</td>
           <td>{text.split(/[.?]+/).length}</td>
         </tr>
         <tr>
           <td>Reading Time</td>
           <td>{0.08 * text.split(" ").length}</td>
         </tr>
       </tbody>
      </table>
      {/* <hr></hr>
      <div className="container my-3">
        <h3 style={{width:"fit-content", margin: 'auto'}}>Preview of your Text</h3>
        <p style={{marginTop: '1rem',marginBottom: '1rem',height: '100px', border: props.mode==='light'?'1px solid black':'1px solid white', padding: '5px'}}>
          {text===''?'Nothing to show. Enter text above':text}
        </p>
      </div> */}
        {/* <h2>Summary of Your Text</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.05 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text===''?'Nothing to show. Enter text above':text}</p> */}
    </div>
    </>
  );
}
