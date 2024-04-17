  import './App.css';
  import Alert from './components/Alert';
  import About from './components/About';
  import Navbar from './components/Navbar';
  import Textform from './components/Textform';
  import React, {useState} from 'react';

  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';



  function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null); 

    const [mode1, setMode1] = useState('normal');
    const [mode2, setMode2] = useState('normal');
    const [btncolor, setbtncolor] = useState('#0d6efd');



    const toggleMode1 = ()=> {
      if(mode1 === 'normal')
      {
      setMode1('green');
      document.body.style.backgroundColor = '#4beb60';
      setbtncolor('#218230');
      showAlert("Green mode has been enabled ", "success");
      }
      else
      {
      setMode1('normal');
      document.body.style.backgroundColor = 'white';
      setbtncolor('#0d6efd');
      showAlert("Green mode has been disabled ", "success");
      }
    }

      const toggleMode2 = ()=> {
        if(mode2 === 'normal')
        {
        setMode2('red');
        document.body.style.backgroundColor = '#ee7d0a';
        setbtncolor('#e7483f');
        showAlert("Red mode has been enabled ", "success");
        }
        else
        {
        setMode2('normal');
        document.body.style.backgroundColor = 'white';
        setbtncolor('#0d6efd');
        showAlert("Red mode has been disabled ", "success");
        }
      }
    
    const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

    const toggleMode = ()=> {
      if(mode === 'light')
      {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled ", "success");
      }
      else
      {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled ", "success");
      }

    }



    return (
      <>
        {/* <Navbar title="TEXTUTILS" abouttext="About this"/> */} 
        {/* <Navbar> */}
        <Router>
        <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} mode1={mode1} toggleMode1={toggleMode1}
        mode2={mode2} toggleMode2={toggleMode2} />
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
            <Route exact path="/" element={<Textform heading="Enter your text here" mode={mode} showAlert={showAlert} btncolor = {btncolor}/>} />
            <Route exact path="/about" element={<About />}/>
        </Routes> 
        { /*<About/> */ } 
        
        </div>
        </Router>
      </>
    );
  }

  export default App;



  //upr my-3 (container my-3 is a classname for doing so) isiliye use kiya h kyuki woh y axis mein 3 spaces ka gap laa jaega and it would look good
  // alerts initial value is null therefore it is not shown unless any command is used
  // ie unless showAlert function is called
  // setimeout is used to remove the alert bar after 2 sec 