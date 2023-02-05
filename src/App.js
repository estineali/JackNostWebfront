import { useState, useEffect } from "react";
import storage from "./firebaseConfiguration";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import WebFont from "webfontloader";

function App() {
  // State to store uploaded file
  const [file, setFile] = useState("");
  // progress
  const [percent, setPercent] = useState(0);

  const fontStyle = "Chilanka";

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Permanent Marker"],
      },
    });
  }, []);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }

    const storageRef = ref(storage, `${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: fontStyle,
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: "#E5DCC5",
      }}
    >
      <h1
        style={{
          paddingTop: "8%",
          paddingBottom: "5%",
          fontSize: 38,
          textAlign: "center",
        }}
      >
        LOSTAGAIN Symposium
      </h1>

      <text
        style={{
          textAlign: "center",
          paddingBottom: "1%",
          fontStyle: "italic",
        }}
      >
        Objects of the past,
      </text>

      <text
        style={{
          textAlign: "center",
          paddingBottom: "1%",
          fontStyle: "italic",
        }}
      >
        Taken from us too fast
      </text>

      <text
        style={{
          textAlign: "center",
          paddingBottom: "3%",
          fontStyle: "italic",
        }}
      >
        Now found, now LostAgain 
      </text>

      <text style={{ textAlign: "center", paddingBottom: "4%" }}>
        Something that makes you nostalgic? Share it with us on this wall!
      </text>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center" }}>
        <input
          type="file"
          onChange={handleChange}
          accept="/image/*"
          style={{ fontFamily: fontStyle }}
        />
        <button
          style={{
            fontSize: 20,
            fontFamily: fontStyle,
            padding: 15,
            alignItems: "center",
            justifyItems: "center",
            marginTop: 20,
            borderRadius: 10,
            borderColor: "black",
            width: "50%"
          }}
          onClick={handleUpload}
        >
          <text>Upload</text>
        </button>
        <p style={{ textAlign: "center" }}>{percent}% done</p>

        <text style={{ textAlign: "center", paddingTop: "15%", fontSize: 20 }}>
          Project: Lost Again {""}
          <a href="https://projectlostagain.wixsite.com/nostagain">
            Website
          </a>{" | "}
          <a href="https://twitter.com/Nostagain">
            Twitter
          </a>{" | "}
          <a href="https://www.youtube.com/@nostagain">
            YouTube
          </a>{" "}
        </text>
      </div>
    </div>
  );
}
export default App;
