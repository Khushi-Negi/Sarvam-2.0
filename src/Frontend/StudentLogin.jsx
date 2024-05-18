import "./StudentFaculty.css";
import React, { useState, useEffect } from "react";
import myImage from "../assets/micicon.webp";
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";

function StudentLoginPage() {
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () =>
      console.log(
        "Voice recognition activated. Try speaking into the microphone."
      );
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const spokenWords = transcript.trim().split(" ");
      const spokenNumbers = spokenWords.map(wordToNumber);
      setLoginId(spokenNumbers.join(""));
    };
    recognition.onerror = (event) =>
      console.error("Speech recognition error:", event.error);

    setSpeechRecognition(recognition);
  }, []);

  const startListening = () => {
    if (speechRecognition) {
      speechRecognition.start();
    } else {
      console.error("Speech recognition not supported.");
    }
  };

  const wordToNumber = (word) => {
    const wordMap = {
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      six: "6",
      seven: "7",
      eight: "8",
      nine: "9",
      ten: "10",
    };
    return wordMap[word.toLowerCase()] || word;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navigation />
      <SideNavBar />

      <div className="container" style={{ width: 600, height: 400 }}>
        <h1>STUDENT LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginId">
            <center>
              <h6 style={{ marginTop: "40px" }}>Login ID:</h6>
            </center>
          </label>

          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="text"
              id="loginId"
              name="loginId"
              placeholder="Enter your login ID"
              value={loginId}
              onChange={(event) => setLoginId(event.target.value)}
              required
            />
          </center>

          {
            <img
              src={myImage}
              alt="Mic"
              className="mic-button"
              style={{
                position: "absolute",
                top: 385,
                right: 530,
                cursor: "pointer",
                height: 40,
                width: 40,
              }}
              onClick={startListening}
            />
          }

          <label htmlFor="password">
            <center>
              <h6 style={{ marginTop: "40px" }}>Password:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 45 }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </center>
          <center>
            <input
              type="submit"
              value="Submit"
              style={{ marginTop: "40px", width: 300 }}
            />
          </center>
        </form>
      </div>
    </div>
  );
}

export default StudentLoginPage;
