import { useState, useEffect } from "react";
import db from "./firebaseConfiguration";
import { collection, addDoc } from "firebase/firestore";
import WebFont from "webfontloader";
import background from "./background.png";

function App() {
  const fontStyle = "Kanit";
  const [message, setMessage] = useState("");

  const stylesheet = {
    mainDiv: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "contain",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: fontStyle,
      width: "100vw",
      height: "100vh",
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
      textAlign: "center",
    },
    submissionContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
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

  // getDocs(collection(db, "timeinabottle")).then((resp) => {
  //   console.log("DEBUG::FETCHING DATA");
  //   resp.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // });

  async function handleSubmit() {
    try {
      console.log(message);
      const docRef = await addDoc(collection(db, "timeinabottle"), {
        message: message,
      });
      console.log("Document written with ID: ", docRef.id);
      setMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
          What is nostalgia? <br /> We are here because something about it
          captures us. Can you capture it in only 140 characters?
          <br /> Tweet away and let your thoughts take flight on the W O N D E R
          W A L L.
        </p>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          <p>Submit</p>
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          paddingTop: "5%",
          fontSize: 12,
          color: "#fff",
          fontFamily: "Ubuntu",
        }}
      >
        NOSTAGAINNETWORK <br />
        <a href="https://nostagain.ca" style={{ color: "#fff" }}>
          {" "}
          Website
        </a>
        {" | "}
        <a
          href="https://nostagain.ca/2024/01/16/program2024/"
          style={{ color: "#fff" }}
        >
          {" "}
          Symposium 2024 Programming
        </a>
        {" | "}
        <a href="https://twitter.com/Nostagain" style={{ color: "#fff" }}>
          Twitter
        </a>
        {" | "}
        <a href="https://www.youtube.com/@nostagain" style={{ color: "#fff" }}>
          YouTube
        </a>
      </p>
    </div>
  );
}
export default App;
