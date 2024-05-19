function FacultyLoginPage() {
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
        // Add more numbers as needed
      };
      return wordMap[word.toLowerCase()] || word;
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      //     // Perform form submission logic here
      //     console.log("Login ID:", loginId);
      //     console.log("Password:", password);
      // You can add your logic for handling form submission, such as sending a request to a server
    };
  
    return (
      <div>
        <Navigation />
        <SideNavBar />
        <div className="container" style={{ width: 600, height: 400 }}>
          <h1> PROFESSORS LOGIN </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="loginId">
              <center>
                <h6 style={{ marginTop: "40px" }}>Login ID:</h6>
              </center>
            </label>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              placeholder="Enter your login ID"
              type="text"
              id="loginId"
              name="loginId"
              value={loginId}
              onChange={(event) => setLoginId(event.target.value)}
              required
            />
            <img
              src={myImage2}
              alt="Mic"
              className="mic-button"
              style={{
                position: "absolute",
                top: 420,
                right: 500,
                cursor: "pointer",
                height: 40,
                width: 40,
              }}
              onClick={startListening}
            />
  
            <label htmlFor="password">
              <center>
                <h6 style={{ marginTop: "40px" }}>Password:</h6>
              </center>
            </label>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password "
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <center>
              <input
                type="submit"
                value="Submit"
                style={{ marginTop: "20px", width: 300 }}
              />
            </center>
          </form>
        </div>
      </div>
    );
  }
  
  export default FacultyLoginPage;
  