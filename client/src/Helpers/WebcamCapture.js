import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";
import { Buffer } from "buffer";

const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const [decodedImage, setDecodedImage] = useState("");

  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImage(imageSrc);

    if (imageSrc) {
      // return decodeURIComponent(
      //   atob(imageSrc)
      //     .split("")
      //     .map(function (c) {
      //       return "%" + ("00" + c.charCodeAt(0).toString(16).slice(-2));
      //     })
      //     .join("")
      // );

      //Using Buffer

      // let base64ToString = Buffer.from(imageSrc, "base64").toString();
      // base64ToString = JSON.parse(base64ToString);

      // console.log("image scr", base64ToString);
      console.log("imageSrc State", imageSrc);
      const byteCharacters = btoa(imageSrc);

      console.log("byteCharacters", byteCharacters);

      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      let blobimage = new Blob([byteArray], { type: "image/png" });

      console.log("image bfor URL", blobimage);

      // let imageUrl = URL.createObjectURL(image);
      // console.log("image scr", imageUrl);
      setDecodedImage(blobimage);
      debugger;
    }
    if (decodedImage !== "") {
      debugger;
      Tesseract.recognize(decodedImage, "eng", {
        logger: (m) => console.log("loading", m),
      }).then(({ data: { text } }) => {
        debugger;
        console.log("converted ", text);
      });
    }
  }, [webcamRef]);

  const captureButton = (e) => {
    e.preventDefault();
    capture();
  };

  return (
    <div>
      <div className="px-4">
        {image === "" ? (
          <Webcam
            audio={false}
            height={250}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={280}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>
      <div className="py-2 my-2">
        {image !== "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="btn py-2 btn-primary"
          >
            Retake Image
          </button>
        ) : (
          <button className="btn btn-primary" onClick={captureButton}>
            Capture
          </button>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;
