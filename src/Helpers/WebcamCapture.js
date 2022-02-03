import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const [image, setImage] = useState("");

  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImage(imageSrc);
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
