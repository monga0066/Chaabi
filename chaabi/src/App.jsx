import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Navbars } from "./comp/Navbars";
import "./App.css";
import { Counter } from "./comp/Counter";

function App() {
  const [currentstr, setCurrentstr] = useState("");

  const [inputstring, setInputstring] = useState("");

  const [timer, settimer] = useState(false);

  const [correct, setCorrect] = useState(0);

  const [wrong, setWrong] = useState(0);

  const [total, setTotal] = useState(0);

  const [accuracy,setaccuracy]=useState(0)



  function genrate() {
    let str = "";
    let char = "asdfjkl;";

    for (let j = 0; j < 6; j++) {
      for (let i = 0; i < Math.random() * 5; i++) {
        str += char.charAt(Math.floor(Math.random() * char.length));
      }

      str += " ";
    }

    str = str.trim();

    return str;
  }

  function handleinput(e) {
    setTotal(total + 1);
    let v = e.target.value;
    setInputstring(e.target.value);

    settimer(true);
    let count = 1;

    for (let i = 0; i < v.length; i++) {
      if (v[i] === currentstr[i]) {
        setCorrect(count++);
      } else {
        setWrong(wrong + 1);
      }
    }
    
    if (e.target.value === currentstr) {
      setTimeout(() => {
        setInputstring("");
        let random = genrate();
        setCurrentstr(random);

        let WPM = total / 5 /  60;
        let NWPM = (total - wrong) / 5 /  60
  
    let a = Math.floor((NWPM * 100) / WPM);
    setaccuracy(a)
      }, 1500);
    }
   
  }

  
  console.log(accuracy)

  

  let next = currentstr[0];
  for (let i = 0; i < currentstr.length; i++) {
    if (currentstr[i] === inputstring[i]) {
      next = currentstr[i + 1];
    }
  }

  const inputColor = () => {
    if (currentstr.indexOf(inputstring) !== -1) {
      if (currentstr === inputstring) {
        return "green";
      }
      return "white";
    }
    return "red";
  };
  const color = () => {
    if (currentstr.indexOf(inputstring) !== -1) {
      if (currentstr === inputstring) {
        return "white";
      }
      return "black";
    }
    return "white";
  };

  useEffect(() => {
    let random = genrate();
    setCurrentstr(random);
    setInterval(() => {
      let random = genrate();
      setCurrentstr(random);
    }, 300000);
  }, []);

  return (
    <div className="main">
      <Navbars />
      <Counter timer={timer} />
      <Container style={{ width: "100%", marginBottom: "10px" }}>
        <img
          style={{ display: "block", margin: "auto" }}
          src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif"
          className="img-fluid"
          alt=""
        />
      </Container>

      <Container
        style={{
          width:"95%",
          height: "45px",
          marginBottom: "10px",
          borderRadius: "0",
          backgroundColor: "#375A7F",
        }}
      >
        <h2 style={{ color: "white", textAlign: "center" }}>{currentstr}</h2>
      </Container>

      <Container
        style={{ display:"flex", width: "100%", marginBottom: "10px" }}
      >
        <div   style={{ display:"flex", width: "auto",margin:"auto", marginBottom: "10px" }}>

       
        <h4 style={{margin:"auto"}} > Press:- </h4>

        <Button
          style={{
            backgroundColor: "#F021B2",
            border: "1px solid #F021B2",
            fontWeight: "500",
            fontSize: "20px",
            marginRight:"0px",
            padding: "0 10px 0 10px",
            borderRadius: "0",
          }}
        >
          {next === " " ? "SPACE" : next}
        </Button>
        </div>
      </Container>

      <Container >
        <Form.Control
          style={{
            width:"100%",
            margin: "auto",
            borderRadius: "0",
            backgroundColor: inputColor(),
            color: color(),
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "20px",
          }}
          size="lg"
          type="text"
          placeholder="Start Typing..."
          onChange={handleinput}
          value={inputstring}
        />
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          justifyItems: "center",
        }}
      >
        <h4> Total:-{total} </h4>
        <h4> Accuracy:-{accuracy}% </h4>
        <h4> WPM:-{correct} </h4>
      </Container>
    </div>
  );
}

export default App;
