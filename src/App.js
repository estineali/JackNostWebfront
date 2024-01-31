import { useState, useEffect } from "react";
import db from "./firebaseConfiguration";
import { collection, addDoc } from "firebase/firestore";
import WebFont from "webfontloader";
import background from "./background.png";
import Swal from "sweetalert2";

const BottomLinks = () => {
  return (
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
  );
};

const NostagainNetwork = () => {
  const fontStyle = "Kanit";
  const stylesheet = {
    nostagainnetwork: {
      paddingTop: "8%",
      fontSize: 18,
      textAlign: "center",
      color: "#fff",
      marginBottom: 0,
      fontFamily: fontStyle,
    },
    presents: {
      fontFamily: "Ubuntu",
      fontStyle: "italic",
      color: "#fff",
      fontSize: 12,
      fontWeight: "lighter",
      marginTop: 0,
    },
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3 style={stylesheet.nostagainnetwork}>NOSTAGAIN</h3>
        <h3 style={{ ...stylesheet.nostagainnetwork, color: "#787878" }}>
          NETWORK
        </h3>
      </div>
      <h5 style={stylesheet.presents}>presents</h5>
    </>
  );
};

const Title = () => {
  const stylesheet = {
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
  };
  return (
    <>
      <h1 style={stylesheet.title}>TIME IN A BOTTLE</h1>
      <h5 style={stylesheet.subtitle}>
        Coming together, once again, to share our research and collectively
        nostalgize.
      </h5>
    </>
  );
};

const MessageBox = (props) => {
  const fontStyle = "Kanit";
  const stylesheet = {
    submissionContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
      borderRadius: 12,
      padding: 20,
      marginTop: 0,
    },
    prompt: {
      fontFamily: "Ubuntu",
      fontStyle: "italic",
      color: "#fff",
      fontSize: 12,
      fontWeight: "lighter",
    },
    submitButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontSize: 20,
      fontFamily: fontStyle,
      borderRadius: 10,
      width: 200,
      height: 40,
      marginTop: 10,
    },
  };

  return (
    <div style={stylesheet.submissionContainer}>
      <p style={stylesheet.prompt}>
        What is nostalgia? <br /> We are here because something about it
        captures us. Can you capture it in less than 100 characters?
        <br /> Tweet away and let your thoughts take flight on the W O N D E R W
        A L L.
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          style={{
            borderRadius: 10,
            display: "flex",
            width: "100%",
            minHeight: 100,
            fontFamily: fontStyle,
            fontStyle: "italic",
          }}
          maxLength={100}
          placeholder="Your message here..."
        />
        <p
          style={{
            fontFamily: fontStyle,
            color: "#fff",
            fontSize: 10,
            alignSelf: "flex-end",
          }}
        >
          {`${props.value.length}/100`}
        </p>
      </div>

      <button style={stylesheet.submitButton} onClick={props.onSubmit}>
        <p style={{ alignSelf: "center", padding: 0 }}>Submit</p>
      </button>
    </div>
  );
};

const App = () => {
  const fontStyle = "Kanit";
  const [message, setMessage] = useState("");
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Kanit", "Ubuntu"],
      },
    });
  }, []);

  async function handleSubmit() {
    if (message.length == 0) {
      Swal.fire({
        title: "Error!",
        heightAuto: false,
        text: "Unable to send message",
        icon: "error",
        confirmButtonText: "Return",
      });
      return;
    }
    try {
      await addDoc(collection(db, "timeinabottle"), {
        message: message,
      });

      Swal.fire({
        title: "Message Sent!",
        heightAuto: false,
        text: "Message sent to wall, go have a look!",
        icon: "success",
        confirmButtonText: "YAY",
      });
      setMessage("");
    } catch (e) {
      Swal.fire({
        title: "Error!",
        heightAuto: false,
        text: "Unable to send message",
        icon: "error",
        confirmButtonText: "Return",
      });
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div
      style={{
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
      }}
    >
      <NostagainNetwork />
      <Title />
      <MessageBox
        onSubmit={handleSubmit}
        value={message}
        onChange={setMessage}
      />
      <BottomLinks />
    </div>
  );
};
export default App;
