import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./App.css";

function App() {
  const [currentstr, setCurrentstr] = useState("");

  const [inputstring, setInputstring] = useState("");

  function genrate() {
    let str = "";
    let char = "abcdef";

    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < Math.random() * 5; i++) {
        str += char.charAt(Math.floor(Math.random() * char.length));
      }

      str += " ";
    }

    str = str.trim();

    return str;
  }



  function handleinput(e) {
    setInputstring(e.target.value);
    if (e.target.value === currentstr) {
      setTimeout(() => {
        setInputstring("");
        let random = genrate();
        setCurrentstr(random);
      }, 1500);
    }
  }
  const inputColor = () => {
    if (currentstr.indexOf(inputstring) !== -1) {
      if (currentstr === inputstring) {
        return "green";
      }
      return "white";
    }
    return "#E7BBDC";
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
    }, 120000);
  }, []);


  


  return (
    <>
      <Container
        style={{
          width: "50%",
          height: "45px",
          margin: "auto",
          borderRadius: "0",
          backgroundColor: "#375A7F",
        }}
      >
        <h2 style={{ color:"white"  }}>{currentstr}</h2>
      </Container>
      <br />
      <br />
      <div>
        <Form.Control
          style={{
            width: "50%",
            margin: "auto",
            borderRadius: "0",
            backgroundColor: inputColor(),
            color: color(),
            fontSize: "bold",
          }}
          size="lg"
          type="text"
          placeholder="Large text"
          onChange={handleinput}
          value={inputstring}
        />
      </div>
    </>
  );
}

export default App;
