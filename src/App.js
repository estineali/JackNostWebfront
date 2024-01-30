import { useState, useEffect } from "react";
import storage from "./firebaseConfiguration";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import WebFont from "webfontloader";
import background from "./background.png";

function App() {
  const fontStyle = "Kanit";

  const stylesheet = {
    mainDiv: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: fontStyle,
      height: "150%",
      width: "100%",
      position: "absolute",
    },
    nostagainnetwork: {
      paddingTop: "8%",
      fontSize: 18,
      textAlign: "center",
      color: "#fff",
      marginBottom: 0,
    },
    presents: {
      fontFamily: "Ubuntu",
      fontStyle: "italic",
      color: "#fff",
      fontSize: 12,
      fontWeight: "lighter",
      marginTop: 0,
    },
    title: {
      color: "#ffffff",
      fontSize: 40,
      textAlign: "center",
      marginBottom: 0,
      marginTop: 0,
    },
    subtitle: {
      fontFamily: "Ubuntu",
      fontStyle: "italic",
      color: "#fff",
      fontSize: 12,
      fontWeight: "lighter",
      marginTop: 0,
      marginBottom: 50,
    },
    submissionContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
      backgroundColor: "#93939350",
      borderRadius: 12,
      padding: 20,
    },
    prompt: {
      fontFamily: "Ubuntu",
      fontStyle: "italic",
      color: "#fff",
      fontSize: 12,
      fontWeight: "lighter",
    },
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Kanit", "Ubuntu"],
      },
    });
  }, []);

  function handleSubmit() {
    console.log("DEBUG::SUBMIT");
  }
  return (
    <div style={stylesheet.mainDiv}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3 style={stylesheet.nostagainnetwork}>NOSTAGAIN</h3>
        <h3 style={{ ...stylesheet.nostagainnetwork, color: "#787878" }}>
          NETWORK
        </h3>
      </div>
      <h5 style={stylesheet.presents}>presents</h5>

      <h1 style={stylesheet.title}>TIME IN A BOTTLE</h1>
      <h5 style={stylesheet.subtitle}>
        Coming together, once again, to share our research and collectively
        nostalgize.
      </h5>

      <div style={stylesheet.submissionContainer}>
        <p style={stylesheet.prompt}>
          What to share? You felt this too? <br />
          This is the prompt for what we expect them to share. Provoke their
          memories and stimulate <br /> their nost-centers for memories,
          feelings, and mental images.
        </p>

        <input
          type="text"
          style={{
            borderRadius: 10,
            display: "flex",
            width: "100%",
            minHeight: 100,
            fontFamily: fontStyle,
            fontStyle: "italic",
          }}
          maxLength={140}
          placeholder="Maximum 140 characters"
        />
        <button
          style={{
            fontSize: 20,
            fontFamily: fontStyle,
            alignItems: "center",
            justifyItems: "center",
            marginTop: 20,
            borderRadius: 10,
            borderColor: "black",
            width: "50%",
            height: "50%",
          }}
          onClick={handleSubmit}
        >
          <text>Submit</text>
        </button>
      </div>
      <text
        style={{
          textAlign: "center",
          paddingTop: "15%",
          fontSize: 20,
          color: "#fff",
        }}
      >
        NOSTAGAINNETWORK {""}
        <a href="https://nostagain.ca"> Website</a>
        {" | "}
        <a href="https://twitter.com/Nostagain">X Page</a>
        {" | "}
        <a href="https://www.youtube.com/@nostagain">YouTube</a>
      </text>
    </div>
  );
}
export default App;
