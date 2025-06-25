import { useState } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./App.css";

function App() {
  const [state, setState] = useState("html");
  const [bgColor, setBgColor] = useState("white"); // новое состояние для цвета фона

  function handleClickButton(e) {
    let currentButton = e.target.innerText;
    if (currentButton === "HTML") {
      setState("html");
    }
    if (currentButton === "HTML + CSS") {
      setState("css");
    }
    if (currentButton === "HTML + CSS + JS") {
      setState("js");
    }
  }

  function handleChangeColor(e) {
    e.preventDefault();
    if (state === "js") {
      setBgColor(bgColor === "white" ? "lightgreen" : "white"); // меняем цвет по клику
    }
  }
  return (
    <div style={{ padding: "50px", backgroundColor: bgColor }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Box sx={{ width: "40%", height: "400px" }}>
            <header style={state === "css" || state === "js" ? { display: "flex", gap: "20px", fontSize: "30px", color: "red" } : {}}>
              <div style={state === "css" || state === "js" ? { border: "1px solid black" } : {}}>item 1</div>
              <div style={state === "css" || state === "js" ? { border: "1px solid black" } : {}}>item 2</div>
              <div style={state === "css" || state === "js" ? { border: "1px solid black" } : {}}> item 3</div>
              <div style={state === "css" || state === "js" ? { border: "1px solid black" } : {}}>item 4</div>
            </header>
            <h1 style={state === "css" || state === "js" ? { fontSize: "60px", padding: "20px" } : {}}>Ich bin ein Haupttitel</h1>
            <p style={state === "css" || state === "js" ? { fontSize: "40px", padding: "20px", color: "green" } : {}}>Ich bin ein Text</p>
            <button onClick={handleChangeColor} style={state === "css" || state === "js" ? { padding: "10px", fontSize: "25px" } : {}}>
              Druck mich bitte, um die Farbe zu wechseln
            </button>

            <Stack sx={{ marginTop: "50px" }} direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
              <Button onClick={(e) => handleClickButton(e)} variant="outlined">
                Html
              </Button>
              <Button onClick={(e) => handleClickButton(e)} variant="outlined">
                Html + CSS
              </Button>
              <Button onClick={(e) => handleClickButton(e)} variant="outlined">
                Html + CSS + JS
              </Button>
            </Stack>
          </Box>
          <Box sx={{ width: "40%", height: "400px", outline: "1px solid red" }}>
            <img
              src={state === "html" ? "https://henryegloff.com/media/How-to-Code-a-Basic-Webpage-Using-HTML-Tutorial-2.jpg" : state === "css" ? "https://miro.medium.com/v2/resize:fit:768/1*6PNOv0T34q-QFBiVSyYlcw.png" : "https://miro.medium.com/v2/resize:fit:1400/1*uiYye9J142y8fIZGRnufEw.png"}
              alt="description"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Stack>
        <Stack spacing={2} direction="column" sx={{ marginTop: "100vh" }}>
          <Box sx={{ marginTop: "500px" }}>
            <Typography variant="h1" gutterBottom>
              Beruf: Softwareentwickler
            </Typography>
          </Box>

          <Box sx={{ marginTop: "500px" }}>
            <Typography variant="h3" gutterBottom>
              Wo studieren?
            </Typography>
            <img src="https://www.dgbrechtsschutz.de/fileadmin/media/0_2015_Media_Neu/Themen/Berufsgruppen/Azubi/Ausbildung_Studium_AdobeStock_84582849.png" alt="" />
            <Typography variant="h4" gutterBottom>
              Dauer: 3-4 Jahre
            </Typography>
          </Box>

          <Box sx={{ paddingTop: "500px" }}>
            <Typography variant="h3" gutterBottom>
              Aufgaben:
            </Typography>
            <img src="https://crosswater-job-guide.com/wp-content/uploads/2019/07/picture_DEKRA_H%C3%A4ufigste-Aufgaben-von-Softwareentwicklern.jpg" alt="" />
            <img style={{ maxWidth: "80vw" }} src="https://pixel-shot.com/get_image/i-8000065-0.JPG" alt="" />
            <img src="https://wiki.selfhtml.org/images/thumb/7/78/HTML-CSS-JS.svg/512px-HTML-CSS-JS.svg.png" alt="" />
          </Box>

          <Box sx={{ paddingTop: "500px" }}>
            <Typography variant="h3" gutterBottom>
              Arbeitsort
            </Typography>
            <img src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/02/27/Photos/motivations--621x414--621x414.jpg" alt="" />
            <img src="https://www.kickidler.com/assets/image-cache/images/tickets/945/1.56a72ded.jpg" alt="" />
          </Box>

          <Box sx={{ paddingTop: "500px" }}>
            <Typography variant="h3" gutterBottom>
              Gehalt:
            </Typography>
            <img style={{ maxWidth: "80vw" }} src="https://cdn.statcdn.com/Infographic/images/normal/29696.jpeg" alt="" />
          </Box>

          <Box sx={{ paddingTop: "500px" }}>
            <Typography variant="h3" gutterBottom>
              Die Zukunft:
            </Typography>
            <img style={{ width: "70vw", height: "70vh" }} src="https://cs14.pikabu.ru/post_img/2023/10/22/8/169798083812349819.jpg" alt="" />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
