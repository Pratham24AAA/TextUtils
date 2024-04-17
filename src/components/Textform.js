import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLoClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleAlterChange = () => {
    let newt = "";
    let a = 0;
    for(let i =0;i<text.length;i++)
    {
        if(text[i]!==" " && a%2===0)
        {
            newt = newt + text[i].toUpperCase();
            a++;
        }
        else if(text[i]!== " " && a%2!==0)
        {
            newt = newt + text[i].toLowerCase();
            a++;
        }
        else
        {
            newt = newt + " ";
        }
    }
    setText(newt);
    props.showAlert("Alternates Changed","success");
  }

  const handleClear = ()=>{
    setText("");
    props.showAlert("Text Cleared","success");
  }

  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }


  const [text, setText] = useState('Enter text here');
  // text = "new text";  // Wrong way to change the state
  // setText("new text");  // Correct way to change the state

  const textlen = () => {
    if(text.split(' ')[0] === '')
    return 0;
    else if(text[text.length-1] === ' ')
    return text.split(' ').length - 1;
    else
    return text.split(' ').length;
  }


  return (
    <>
    <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='light'?'black':'white' }} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style ={{backgroundColor: props.btncolor}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style ={{backgroundColor: props.btncolor}} onClick={handleLoClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style ={{backgroundColor: props.btncolor}} onClick={handleAlterChange}>Convert to Alternate Up and Low</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style ={{backgroundColor: props.btncolor}} onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3 " style={{color : props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{textlen()} words and {text.trim().length} characters</p>
        <p>{0.008 * textlen()} Minutes needed to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}



// rows = "8" in textarea defines the vertical length of the textbox

// {useState} is called hooks in js.....can change the state of a given component as we did with the text entered
// const [text, setText] = useState('Enter text here');................this is used to implement these hooks 
// where text is the variable in which text entered is stored and setText is the function to convert
// "Enter text here" denotes the default value of text................" " just empty bhi rakh skte h
// handleUpClick is the event listener arrow function to convert the text on  clicking the button
// onchange is also event listener in which we signify that on changing the text in the textarea
// the value gets changed and text value changes to the newtext entered
// onchange event listen nhi krte toh textarea mein nyi text likh nhi paate na hi add kr paate usme
// text.split(" ") -> ek array deta h of worrds seperated by space
// .length krke uss array ka size nikalre h to be give us no. of words 
// style is the attribute of the div container and to add javascript use {} and to add objects inside it again use {}
// used props.showAlert as we needed to change the alert text when used these function 
