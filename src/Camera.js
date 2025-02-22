import React, { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState("none");

  // Function to capture the photo
  const capturePhoto = () => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      console.error("Failed to capture image.");
      return;
    }

    setImage(imageSrc); // Store the captured image
  };

  // Function to apply filters (memoized with useCallback)
  const applyFilter = useCallback(
    (imageSrc) => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = imageSrc;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = filter; // Apply selected filter
        ctx.drawImage(img, 0, 0, img.width, img.height);
      };
    },
    [filter] // ✅ Ensures function updates only when filter changes
  );

  // Run effect when the image is updated or filter is changed
  useEffect(() => {
    if (image) {
      applyFilter(image);
    }
  }, [image, applyFilter]);

  // Function to download the captured image
  const downloadImage = () => {
    if (!canvasRef.current) return;

    const link = document.createElement("a");
    link.download = "captured_photo.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="camera-container">
      <div className="camera-section">
        {!image ? (
          <>
            {/* Live Camera Feed */}
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/png"
              className="camera-preview"
              style={{ filter: filter }} // Live filter preview
            />
            <button onClick={capturePhoto}>Capture</button>
          </>
        ) : (
          <>
            {/* Display Captured Image */}
            <canvas ref={canvasRef} className="filtered-canvas" />
            <div className="btn-group">
              <button onClick={downloadImage}>Download</button>
              <button onClick={() => setImage(null)}>Retake</button>
            </div>
          </>
        )}
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <h3>Select Filter</h3>
        <button onClick={() => setFilter("none")}>None</button>
        <button onClick={() => setFilter("grayscale(100%)")}>Grayscale</button>
        <button onClick={() => setFilter("sepia(100%)")}>Sepia</button>
        <button onClick={() => setFilter("invert(100%)")}>Negative</button>
        <button onClick={() => setFilter("brightness(1.5)")}>Bright</button>
      </div>
    </div>
  );
};

export default Camera;
