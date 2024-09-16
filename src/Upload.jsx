import React, { useState, useRef, useEffect } from 'react';
import { UserButton } from "@clerk/clerk-react";
import "./Upload.css"

export default function Dashboard() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      console.log("Attempting to open camera...");
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      console.log("Camera stream obtained:", stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log("Stream set to video element");
        await videoRef.current.play();
        console.log("Video playback started");
        setIsCameraOpen(true);
      }
    } catch (err) {
      console.error("Error accessing the camera: ", err);
      alert("Unable to access the camera. Please ensure you've granted the necessary permissions.");
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOpen(false);
    }
  };

  useEffect(() => {
    if (isCameraOpen && videoRef.current && !videoRef.current.srcObject) {
      openCamera();
    }
  }, [isCameraOpen]);

  return (
    <>
      <header>
        <UserButton />
      </header>
      <div className="dashboard-container">
        <main>
          <h1>Upload Invoice</h1>
          {!isCameraOpen ? (
            <button className="camera-button" onClick={() => setIsCameraOpen(true)}>Open Camera</button>
          ) : (
            <div className="camera-container">
              <video ref={videoRef} autoPlay playsInline />
              <button className="camera-button" onClick={closeCamera}>Close Camera</button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}